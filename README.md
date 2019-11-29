# Figma UI String Manager

The goal of this project is to create a Figma plugin to serve as one end
of an complete UI string manager. For this to work, the plugin must meet
the following requirements:

* __Read in structured data from an external data source.__
    The specific source format can be altered as necessary. This repo provides
    sample data in a JSON file and a CSV file. 

* __Match records in the data file to specific text nodes.__
   We need to locate specific text nodes in the Figma file (e.g., specific
   app screens, messages for specific errors, etc.) that correspond
   to records in the data file.

* __Update the text node from the corresponding data record.__

* __Work with non-public data sources.__
    The Figma plugin Google Sheets Sync by David Willames is an excellent
    example of the kind of functionality we need, but this plugin requires
    the data to be available publicly on the web. Unfortunately, this is not
    possible in our use case.


## Sample data

Data is also available as a public gist at the following URL:

https://gist.githubusercontent.com/DorothyLindman/29bf34ec5b34a19dbd1d24b17e39e02e/raw/79553a8eb4118ca6b2732f01a416f5daf4c1f139/message-text.json

(This URL should work as a JSON URL in most cases. We've tested private 
or secret gists also, and these worked as JSON end points.)


## Similar plugins

This section provides links to published Figma plugins with public source files.

### Text replacement plugins

* Content Buddy (Ismael Gonzalez): <https://github.com/basiclines/figma-content-buddy>

### Data populator plugins

These plugins read data in from a file, create a new text node for each
record, and populate the node with that record's data. This is not the
functionality we're looking for here, but these plugins might serve as a
starting point.

* JSON Populate (Bart S.): <https://github.com/TDMW/figma-json-populate/>

* Data From Local (Ashung Hung): <https://github.com/Ashung/figma_data_from_local>
