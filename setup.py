###
# arberweb
# Arber Xhindoli github:@arberx
##

from setuptools import setup

setup(
    name='arberweb',
    version='1.0',
    packages=['arberweb'],
    include_package_data=True,
    install_requires=[
        'Flask',
        'flask_bootstrap',
        'nodeenv'
    ]
)
