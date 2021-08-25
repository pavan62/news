# Ionic Customer Success Deep Linking Demo

This application demonstrates the basics of using [Deeplinks](https://capacitorjs.com/docs/guides/deep-links) within an Ionic Capacitor application. This application explores the use of Universal Links (iOS) and App Links (Android) as well as the use of a custom URL scheme.

## Building this Application

- Clone this repo
- `cd cs-demo-deeplink-mobile`
- `npm i`
- `npm run build`
- `npx cap sync`
- `npx cap open android` (you can also test on iOS, but you will need to do extra work as noted below)

<a href="https://kensodemann.github.io/ionic/cordova/2018/11/16/deep-linking.html" target="_blank">Sample links</a> are available for testing.

## Universal / App Links

The Universal/App Links allow you to use a link that looks like this: `https://cs-demo-deeplink.herokuapp.com/oolong`. This allows you to offer links that will open in the application if it is installed while opening the specified link in the web browser if it is not.

In the case of this application, we have several links for which this will work:

- [White](https://cs-demo-deeplink.herokuapp.com/white)
- [Yellow](https://cs-demo-deeplink.herokuapp.com/yellow)
- [Green](https://cs-demo-deeplink.herokuapp.com/green)
- [Oolong](https://cs-demo-deeplink.herokuapp.com/oolong)
- [Black](https://cs-demo-deeplink.herokuapp.com/black)
- [Dark](https://cs-demo-deeplink.herokuapp.com/dark)
- [Puer](https://cs-demo-deeplink.herokuapp.com/puer)
- [Herbal](https://cs-demo-deeplink.herokuapp.com/herbal)

Notice that if you click the link without the application installed, a web page will open displaying information about that tea. If you have the application installed, the application will open and the proper tea page will be displayed.

The code within the app that performs the navigation when a link is received looks like this:

```TypeScript
  ngOnInit() {
    const { App } = Plugins;
    App.addListener('appUrlOpen', (data: { url: string }) =>
      this.zone.run(() => this.handleDeeplink(data.url)),
    );
  }

  private handleDeeplink(link: string) {
    const path = this.getPath(link);
    if (path) {
      this.navController.navigateRoot(['/', path]);
    }
  }

  private getPath(link: string): string {
    const url = new URL(link);
    const paths = url.pathname.split('/');
    return (
      paths[paths.length - 1] ||
      (url.protocol === 'csdldemo:' ? url.hostname : '')
    );
  }
```

The important thing to notice here is that the full URL is sent to the app, so if the user clicked on `https://cs-demo-deeplink.herokuapp.com/dark`, that whole URL is sent to our app. This allows us to parse the URL and do whatever makes sense within our application. In our case, we have a 1:1 relationship between the value web URLs and our pages, but that does not have to be the case.

You could have a links such as `https://cs-demo-deeplink.herokuapp.com?page=green` where the web page ignores the query parameter but the app uses it for navigation. That is to say, there is a lot of flexibility here and you can tailor the link handling to fit your needs.

Supporting Universal/App Links on the device requires a little bit of special configuration on your web site in order to create a two-way association between the web site and your application. This configuration is handled via a concept known as a "Site Association File." The mechanics of how this is done, and when you actually need to do it, is different depending on platform.

### Android

For Android, you only need to have the Site Association File when you release the application. For development, you can load the application on your device and everything will work. When it comes time to build the application for release, however, you will need to create a Site Association File that is assicated with your application's certificate. We <a href="https://capacitorjs.com/docs/guides/deep-links#android-configuration" target="_blank">have instructions for you to follow</a> that will guide you through the process.

### iOS

Running this application on an iOS device and having it work with the Universal Links is a little trickier in that you need to have the Site Association File in place, even for development. This mean that unless you are an Ionic employee who has access via our Enterprise team, and thus has access to the provisioning profile required to build the app, you cannot just run this application of the box. You will instead need to follow these fairly simple modifications to try it out:

- Modify the Bundle ID for the application to something unique to you
- Enroll in the Apple Developer Program
- Follow <a href="https://capacitorjs.com/docs/guides/deep-links#ios-configuration" target="_blank">our instructions</a> to create an `apple-app-site-association`
- Clone [Web Site code](https://github.com/ionic-team/cs-demo-deeplink-web) and change the `.well-known/apple-app-site-association` that is sent by the web site
- Deploy the website somewhere
- Modify the "Associated Domains" setup in Xcode based on where you deployed the site

Now you can build the project as modified and have all of this work (assuming all moving parts were moved correctly).

OR you can just test this out on Android devices and trust that it will work on iOS as long as everything is set up correctly (which it does).

## Custom URL Scheme

You can also perform deep linking via a custom URL scheme. This is the easiest method to set up, but is also only allows you to link into the app. If the app is not installed the device will not know what to do with the link, and the link will not open your web page. As a result, this style of linking is more commonly used for linking between applications or for other uses that involve specifically linking to the application and only the application.

A custom URL scheme link looks like this: `csdldemo://dark`

In order to support this in Android, you need to add an intent within the `AndroidManifest.xml` file:

```xml
            <intent-filter>
                <data android:scheme="csdldemo" />
                <action android:name="android.intent.action.VIEW" />

                <category android:name="android.intent.category.DEFAULT" />
                <category android:name="android.intent.category.BROWSABLE" />
            </intent-filter>
```

In order to support this in iOS, you need to add a scheme within the `Info.plist` file:

```xml
    <dict>
      <key>CFBundleURLName</key>
      <string>com.getcapacitor.capacitor</string>
      <key>CFBundleURLSchemes</key>
      <array>
        <string>capacitor</string>
        <string>csdldemo</string>
      </array>
    </dict>
```

Have a look at those files within this project for examples.

Within your Ionic application, these links are handled via the `appUrlOpen` listener just like the Universal/App Links:

```TypeScript
  ngOnInit() {
    const { App } = Plugins;
    App.addListener('appUrlOpen', (data: { url: string }) =>
      this.zone.run(() => this.handleDeeplink(data.url)),
    );
  }
```

As a result you can easily support Universal/App Links and Customer URL Scheme links using the same processing code.

Happy Coding!! 🤓
