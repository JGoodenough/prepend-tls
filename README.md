# prepend-tls

`Prepend `https://`or`http://` scheme to URLs.`

# Install

`$ npm install prepend-tls`

# Usage

```
import prependTLS from 'prepend-tls';

// Prepend https://
prependTLS('jessegoodenough.com');
//=> 'https://jessegoodenough.com'

// Prepend http://
prependTLS('jessegoodenough.com', { httpOnly: true });
//=> 'http://jessegoodenough.com'

// Already included https:// returns url unchanged
prependTLS('https://jessegoodenough.com');
//=> 'https://jessegoodenough.com'

```

# API

**prependTLS(url, options?)**

## url

Type: string

The URL to prepend `https://` or `http://` to.

## options

Type: object

    **httpOnly**

    Type: boolean

    Default: false

    Prepend `http://` instead of `https://`
