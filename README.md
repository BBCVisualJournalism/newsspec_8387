# Stock Timeline

This is a stock timeline that can be easily duplicated to create new timelines and obituaries. For full instructions on how to do this, [read the instructions on Confluence](https://confluence.dev.bbc.co.uk/display/newsspec/How+to+make+a+Timeline+or+Obituary).

## Known issues

Debug mode is not available due to the changes in architecture required in this project (e.g. missing jQuery version).
Videos will not work in the stage environment, unless the video has a matching MAP page on stage (unlikely). Similarly, placeholder images for videos will not load in the local environment because of cross-domain issues. Both should work in tandem on live.
Videos require two clicks on mobile devices, owing to data-usage restrictions that prevent autoplay from working.

## Changes to the default iFS architecture

To get videos to play nice with the scaffold, this timeline has some fundamental changes to the iFrame scaffold architecture which can make it difficult to upgrade to new iFS versions.

These changes are outlined here: https://github.com/BBCVisualJournalism/newsspec_8387/wiki/Changes-to-the-default-iFrame-Scaffold-architecture

## iFrame scaffold

This project was built using the iFrame scaffold v1.4.3

## License
Copyright (c) 2014 BBC