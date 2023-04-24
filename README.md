# prepend-tls

`Prepend `https://`or`http://` scheme to URLs.`

# Install

`$ npm install prepend-tls`

# Usage

```
import prependTLS from 'prepend-tls';

// Prepend https://
prependTLS(jessegoodenough.com);
//=> 'https://jessegoodenough.com'

// Prepend http://
prependTLS(jessegoodenough.com, { httpOnly: true });
//=> 'http://jessegoodenough.com'

// Include default sub domain www.
prependTLS(jessegoodenough.com, { includeSubDomain: true });
//=> 'https://www.jessegoodenough.com'

// Include custom sub domain blog.
prependTLS(jessegoodenough.com, { includeSubDomain: true, customSubDomain: 'blog.' });
//=> 'https://blog.jessegoodenough.com'

// Already included https:// returns same string
prependTLS(https://jessegoodenough.com);
//=> 'https://jessegoodenough.com'

```
