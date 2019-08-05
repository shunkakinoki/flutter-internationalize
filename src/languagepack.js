const vscode = require('vscode');
const path = require('path')
const { workspace } = vscode;

class LanguagePack {

    static async load(uri) {
        const lang = new LanguagePack(uri);
        await lang.reload();
        return lang;
    }

    constructor(uri) {
        this.uri = uri;
    }

    async reload() {
        const text = await workspace.openTextDocument(this.uri);
        this.json = JSON.parse(text.getText());
        this.lang = path.basename(this.uri.path, '.json')
    }
}

module.exports.LanguagePack = LanguagePack;