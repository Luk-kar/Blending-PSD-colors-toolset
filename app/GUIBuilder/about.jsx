
function about(mainMenu) {
    var about = new Window("dialog", "About");
    about.alignChildren = "left";

    // https://community.adobe.com/t5/after-effects-discussions/how-to-change-size-and-color-of-quot-statictext-quot/m-p/7748361
    var winGraphics = about.graphics;
    var blueColor = winGraphics.newPen(winGraphics.BrushType.SOLID_COLOR, [0,0,1], 1);

    var text = 'Instruction:\n' +
    '1. Have folder "COLORS" in the top hierarchy in the PSD file.\n' +
    '2. Have some folders in the "COLORS" folder.\n' +
    '3. In each folder have 3 layers with names: R, G, B.\n' +
    '4. Each layer has in the left upper corner a color sample.\n' +
    '5. Run "Write colors from layers to CSV file".\n' +
    '6. Find CSV file, where opened PSD file is located.\n' +
    '7. Enjoy.';

    var instruction = about.add("statictext", undefined, text, {multiline: true});
    instruction.alignment = "left";
    instruction.characters = 30;

    var authorWWW = "www.github.com/Luk-kar";
    var author = about.add("statictext", undefined, "Karol Łukaszczyk");
    author.graphics.foregroundColor = blueColor;
    author.onClick = function() {
        openSite(authorWWW);
    }


    var repoSiteWWW = "www.github.com/Luk-kar/Read_blending_colors";
    var repoSite = about.add("statictext", undefined, repoSiteWWW);
    repoSite.alignment = "left";
    repoSite.characters = 40;
    repoSite.graphics.foregroundColor = blueColor;

    repoSite.onClick = function() {
        openSite(repoSiteWWW);
    }

    var buttonReturn = about.add("button", [0,80,290,101], 'Return');

    buttonReturn.onClick = function() {
        about.close();
        mainMenu.show();
    }

    about.show();
}

function openSite(site) {

      if (  $.os.indexOf("Windows") != -1 ) 

      {//SYSTEM IS ONE OF THE WINDOWS
                          app.system("cmd.exe /c\"start http://"+site+"\"" );
                }
                          else{//MUST BE MAC
                          system.callSystem("open http://"+site);
          }
}