var _configKeys = {
    colorKey: "_color",
    coordKey: "_coord"
}

var configDefaultValues = {
    fileStructure: {
        title: "FILE STRUCTURE",
        column_folders_name: "folders",
        color_folder: {
            name: {
                key: "color_folder_name",
                value: "COLORS"
            },
            folders: {
                key: "folders_in_it",
                value: "1"
            },
            layers: {
                key: "layers_in_it",
                value: "R,G,B"
            }
        },
        base_folder: {
            name: {
                key: "base_folder_name",
                value: "BASE"
            }
        },
    },
    colorsRGB: {
        title: "COLORS RGB",
        R: {
            key: "R" + _configKeys.colorKey,
            value: "FF0000"
        },
        G: {
            key: "G" + _configKeys.colorKey,
            value: "00FF00"
        },
        B: {
            key: "B" + _configKeys.colorKey,
            value: "0000FF"
        }
    },
    pickerCoords: {
        title: "COLOR PICKER COORDS PIXEL FILL",
        R: {
            key: "R" + _configKeys.coordKey,
            value: "180,175"
        },
        G: {
            key: "G" + _configKeys.coordKey,
            value: "140,274"
        },
        B: {
            key: "B" + _configKeys.coordKey,
            value: "178,249"
        }
    }
};
