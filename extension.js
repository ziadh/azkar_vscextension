let vscode = require('vscode');

function activate(context) {
    let currentSide = 'left';

    let AzkarLeftSideBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, 0);
    AzkarLeftSideBarItem.show();

    let AzkarRightSideBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 0);
    AzkarRightSideBarItem.hide();

    let messages = ["سبحان الله", "الحمد لله", "لا اله الا الله", "الله اكبر","صلي على النبي ﷺ"];
    let index = 0;
    setInterval(() => {
        if (currentSide === 'left') {
            AzkarLeftSideBarItem.text = messages[index];
        } else {
            AzkarRightSideBarItem.text = messages[index];
        }
        index = (index + 1) % messages.length;
    }, Math.floor(Math.random() * 1000) + 5000);

    let toggleSideCommand = vscode.commands.registerCommand('extension.toggleSide', function () {
        if (currentSide === 'left') {
            currentSide = 'right';
            AzkarLeftSideBarItem.hide();
            AzkarRightSideBarItem.show();
        } else {
            currentSide = 'left';
            AzkarRightSideBarItem.hide();
            AzkarLeftSideBarItem.show();
        }
    });

    context.subscriptions.push(toggleSideCommand);
}

function deactivate() {}

module.exports = {
    activate,
    deactivate
}