figma.showUI(__html__, {width: 800, height: 600});
// Finds all text nodes and their top-level parent, returns properties of both
var textNodes, textProps  = [];

figma.ui.onmessage = async msg => {
  switch (msg.type) {
    case "getPage":
      let pageNodes = figma.currentPage.findAll(n => n.type === "TEXT") as TextNode[];
      textNodes = pageNodes;
      break;
    case "getAll":
      let allNodes = figma.root.findAll(n => n.type === "TEXT") as TextNode[];
      textNodes = allNodes;
      break;
};

//let selection = selectRange;

   // const textNodes = selection.findAll(n => n.type === "TEXT") as TextNode[];


for (let i = 0; i<textNodes.length; i++) {

var nodeParent = textNodes[i].parent;

  if ("parent" in nodeParent.parent) {
    var nodeGrandparent = nodeParent;
      while (nodeGrandparent.type !== "PAGE") {
        nodeParent = nodeGrandparent;
        nodeGrandparent = nodeParent.parent;
      };
    };

    textProps.push(["<br />\"" + textNodes[i].id + "\"", "\"" + textNodes[i].name + "\"", "\"" + textNodes[i].characters + "\"", "\"" + nodeParent.id + "\"", "\"" + nodeParent.name + "\"", "\"" + nodeParent.type + "\"", "\"" + nodeGrandparent.name + "\"", "\"" + nodeGrandparent.type + "\""]);
}

console.log(textProps);

figma.ui.postMessage({"textProperties": textProps})}
