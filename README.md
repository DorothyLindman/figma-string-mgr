# Figma UI String Manager

The goal of this project is to create a Figma plugin to serve as one end
of a complete UI string manager. For this to work, the plugin must meet
the following requirements:

* __Read in structured data from an external data source.__
    The specific source format can be altered as necessary. This repo provides
    sample data in a JSON file and a CSV file. 

* __Match records in the data file to specific text nodes.__
   We need to locate specific text nodes in the Figma file (e.g., specific
   app screens, messages for specific errors, etc.) that correspond
   to records in the data file. The sample Figma file is structured
   to match the sample data.

* __Update the text node from the corresponding data record.__

* __Work with permissions-restricted data sources.__
    The plugin must use files with restriced permissions (e.g., local files,
    private GitHub gists, Google Sheets or JSON files published behind a
    firewall, etc.). 

* __Provide a basic user interface.__
    At a minimum, the UI needs to let the user indicate a data source
    (by selecting a file, entering a URL, etc.), choose to update selected
    layers or update all layers, and activate the update process.

## Sample Figma file and sample data

I've set up a sample Figma file with example messages. The node names and 
structures in this file match the sample data. You can access the sample
file at the following link (you will need a Figma account to access the file):

https://www.figma.com/file/r9etITej7OhH2HRDrpk2sC/Message-popups

The first page of the Figma file shows the data structure and how it aligns
to the text nodes. This page also calls out the relevant attributes of
Figma text nodes.

The _sample-data_ folder has the data for this Figma plugin in JSON, CSV,
and Excel file. The JSON file is also available as a [public gist on GitHub](https://gist.github.com/DorothyLindman/29bf34ec5b34a19dbd1d24b17e39e02e). For a
hosted version of the JSON file, use the "raw" view of the gist at the 
following URL: 

> <https://gist.githubusercontent.com/DorothyLindman/29bf34ec5b34a19dbd1d24b17e39e02e/raw/79553a8eb4118ca6b2732f01a416f5daf4c1f139/message-text.json>


## Similar plugins

__NOTE: check the status of these plugins.__

The [Google Sheets Plugin](https://www.figma.com/c/plugin/735770583268406934/Google-Sheets-Sync) by David Willames is an excellent
    example of the functionality we need. (This plugin actually has more
    features than we need, and the UI is very well done. However, this
    plugin doesn't work with restricted-permissions files, so we can't use it.)

There are other plugins which have similar functionality and public source
code on GitHub.

### Text replacement plugins

* Content Buddy (Ismael Gonzalez): <https://github.com/basiclines/figma-content-buddy>

### Data populator plugins

These plugins read data in from a file, create a new text node for each
record, and populate the node with that record's data. This is not the
functionality we're looking for here, but these plugins might serve as a
starting point.

* JSON Populate (Bart S.): <https://github.com/TDMW/figma-json-populate/>

* Data From Local (Ashung Hung): <https://github.com/Ashung/figma_data_from_local>
