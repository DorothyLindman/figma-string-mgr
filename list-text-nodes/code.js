var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
figma.showUI(__html__, { width: 800, height: 600 });
// Finds all text nodes and their top-level parent, returns properties of both
var textNodes, textProps = [];
figma.ui.onmessage = (msg) => __awaiter(this, void 0, void 0, function* () {
    switch (msg.type) {
        case "getPage":
            let pageNodes = figma.currentPage.findAll(n => n.type === "TEXT");
            textNodes = pageNodes;
            break;
        case "getAll":
            let allNodes = figma.root.findAll(n => n.type === "TEXT");
            textNodes = allNodes;
            break;
    }
    ;
    //let selection = selectRange;
    // const textNodes = selection.findAll(n => n.type === "TEXT") as TextNode[];
    for (let i = 0; i < textNodes.length; i++) {
        var nodeParent = textNodes[i].parent;
        if ("parent" in nodeParent.parent) {
            var nodeGrandparent = nodeParent;
            while (nodeGrandparent.type !== "PAGE") {
                nodeParent = nodeGrandparent;
                nodeGrandparent = nodeParent.parent;
            }
            ;
        }
        ;
        textProps.push(["<br />\"" + textNodes[i].id + "\"", "\"" + textNodes[i].name + "\"", "\"" + textNodes[i].characters + "\"", "\"" + nodeParent.id + "\"", "\"" + nodeParent.name + "\"", "\"" + nodeParent.type + "\"", "\"" + nodeGrandparent.name + "\"", "\"" + nodeGrandparent.type + "\""]);
    }
    console.log(textProps);
    figma.ui.postMessage({ "textProperties": textProps });
});
