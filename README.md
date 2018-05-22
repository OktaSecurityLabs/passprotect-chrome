# passprotect-chrome

**Stop using bad passwords.**

![PassProtect demo](https://github.com/oktasecuritylabs/passprotect-chrome/raw/master/assets/passprotect.gif)


## What is PassProtect?

PassProtect is a Chrome extension created and maintained by [Randall Degges](https://twitter.com/rdegges)
that you can drop into any web page which dramatically improves the security
of users accessing your website.

PassProtect works by binding itself to all `input` elements on the page of type
`email` or `password`. Whenever a user enters a new value into one of these
`input` elements, PassProtect will check the user's email / password against
the fabulous [Have I Been Pwned?](https://haveibeenpwned.com) API service to see whether or not
the user's email OR password has been breached in the past.

Finally, if appropriate, PassProtect will inform the user that their credentials
were previously breached, give them some useful information, and ask them to
update their password as soon as they can to reduce the risk that their account
will be compromised.

PassProtect is a new, experimental way to proactively notify users about data
breaches and help casual web users play a more active role in protecting their
online accounts.

We believe that by informing and guiding users to reset their credentials when
necessary, we can all help make the web a safer place &lt;3


## How to Use PassProtect

Just head on over to the Chrome webstore and install PassProtect! https://chrome.google.com/webstore/detail/passprotect/cpimldclklpfifolmdnicjnfbjdepjnf

If you like it, be sure to leave a review! =)


## Is PassProtect Secure?

**YES!**

PassProtect never sends or stores password information over the network. It uses
[k-Anonymity](https://www.troyhunt.com/ive-just-launched-pwned-passwords-version-2/)
to safely communicate your sensitive data over the internet without risk.

PassProtect is also completely free, open source, and maintained by [Randall
Degges](https://twitter.com/rdegges). If you want to audit the source, or have
ideas about how to do things better, please open a
[GitHub issue](https://github.com/oktasecuritylabs/passprotect-js) or [email me](mailto:randall.degges@okta.com) directly.


## Are You a Developer?

Awesome! You might enjoy checking out [passprotect-js](https://github.com/oktasecuritylabs/passprotect-js), it's a
developer library that provides the same functionality for websites you're
building.

It's really awesome because by dropping a single `script` tag into your
websites you can instantly enable PassProtect's awesome password protection
functionality across your sites for all of your users. And it's even mobile
friendly!


## Changelog

**0.1.8**: May 22, 2018

- Removing email functionality for now.

**0.1.7**: May 22, 2018

- Improving form binding.

**0.1.6**: May 22, 2018

- Removing redundant code.
- Making code more portable.

**0.1.5**: May 21, 2018

- Fixed some minor packaging issues.

**0.1.4**: May 21, 2018

- Fixed some minor packaging issues.
-
**0.1.3**: May 19, 2018

- Prepped for public release.

**0.1.2**: May 16, 2018

- Minor updates.

**0.1.1**: May 15, 2018

- Minor updates.

**0.1.0**: *May 14, 2018*

- First release! Yey.
