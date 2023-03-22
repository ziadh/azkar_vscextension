const vscode = require('vscode');

function activate(context) {
    let statusBar = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left);
    statusBar.show();
    context.subscriptions.push(statusBar);

    let messages = ["سبحان الله","الحمد لله","لا اله الا الله","الله اكبر"];
    let index = 0;
    setInterval(() => {
    statusBar.text=messages[index]
    index=(index+1)%messages.length;
    }, Math.floor(Math.random()*1000)+5000);
}

module.exports = {
    activate
};