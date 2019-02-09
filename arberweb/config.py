###
# arberweb
# Arber Xhindoli github:@arberx
###

# Uncommited file, kept for server secrets. 
# In this case, the key to encrypt cookies.
# To generate a secret key:
# os.urandom(24)

import os
import arberweb.server_secrets

# Root of this application, useful if it doesn't occupy an entire domain
APPLICATION_ROOT = '/'

# cookie info
SECRET_KEY = arberweb.server_secrets.SECRET_KEY
SESSION_COOKIE_NAME = 'arberweb_cookie'
