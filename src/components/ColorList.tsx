export interface colorType {
  name: string;
  colors: {name:string, code:string}[];
}

export const ColorList : colorType[] = [
  {
    name:"Blue",
    colors:[
      {name: "Cyan", code: "#00FFFF"},
      {name: "LightCyan", code: "#E0FFFF"},
      {name: "PaleTurquoise", code: "#AFEEEE"},
      {name: "Aquamarine", code: "#7FFFD4"},
      {name: "Turquoise", code: "#40E0D0"},
      {name: "MediumTurquoise", code: "#48D1CC"},
      {name: "DarkTurquoise", code: "#00CED1"},
      {name: "CadetBlue", code: "#5F9EA0"},
      {name: "SteelBlue", code: "#4682B4"},
      {name: "LightSteelBlue", code: "#B0C4DE"},
      {name: "PowderBlue", code: "#B0E0E6"},
      {name: "LightBlue", code: "#ADD8E6"},
      {name: "SkyBlue", code: "#87CEEB"},
      {name: "LightSkyBlue", code: "#87CEFA"},
      {name: "DeepSkyBlue", code: "#00BFFF"},
      {name: "DodgerBlue", code: "#1E90FF"},
      {name: "CornflowerBlue", code: "#6495ED"},
      {name: "MediumSlateBlue", code: "#7B68EE"},
      {name: "RoyalBlue", code: "#4169E1"},
      {name: "Blue", code: "#0000FF"},
      {name: "MediumBlue", code: "#0000CD"},
      {name: "DarkBlue", code: "#00008B"},
      {name: "Navy", code: "#000080"},
      {name: "MidnightBlue", code: "#191970"},
    ]
  },
  {
    name:"Green",
    colors:[
      {name: "GreenYellow", code: "#ADFF2F"},
      {name: "Chartreuse", code: "#7FFF00"},
      {name: "LawnGreen", code: "#7CFC00"},
      {name: "Lime", code: "#00FF00"},
      {name: "LimeGreen", code: "#32CD32"},
      {name: "PaleGreen", code: "#98FB98"},
      {name: "LightGreen", code: "#90EE90"},
      {name: "MediumSpringGreen", code: "#00FA9A"},
      {name: "SpringGreen", code: "#00FF7F"},
      {name: "MediumSeaGreen", code: "#3CB371"},
      {name: "SeaGreen", code: "#2E8B57"},
      {name: "ForestGreen", code: "#228B22"},
      {name: "Green", code: "#008000"},
      {name: "DarkGreen", code: "#006400"},
      {name: "YellowGreen", code: "#9ACD32"},
      {name: "OliveDrab", code: "#6B8E23"},
      {name: "Olive", code: "#808000"},
      {name: "DarkOliveGreen", code: "#556B2F"},
      {name: "MediumAquamarine", code: "#66CDAA"},
      {name: "DarkSeaGreen", code: "#8FBC8B"},
      {name: "LightSeaGreen", code: "#20B2AA"},
      {name: "DarkCyan", code: "#008B8B"},
      {name: "Teal", code: "#008080"},
    ]
  },
  {
    name:"Purple",
    colors:[
      {name: "Lavender", code: "#E6E6FA"},
      {name: "Thistle", code: "#D8BFD8"},
      {name: "Plum", code: "#DDA0DD"},
      {name: "Violet", code: "#EE82EE"},
      {name: "Orchid", code: "#DA70D6"},
      {name: "Magenta", code: "#FF00FF"},
      {name: "MediumOrchid", code: "#BA55D3"},
      {name: "MediumPurple", code: "#9370DB"},
      {name: "RebeccaPurple", code: "#663399"},
      {name: "BlueViolet", code: "#8A2BE2"},
      {name: "DarkViolet", code: "#9400D3"},
      {name: "DarkOrchid", code: "#9932CC"},
      {name: "DarkMagenta", code: "#8B008B"},
      {name: "Purple", code: "#800080"},
      {name: "Indigo", code: "#4B0082"},
      {name: "SlateBlue", code: "#6A5ACD"},
      {name: "DarkSlateBlue", code: "#483D8B"},
      {name: "MediumSlateBlue", code: "#7B68EE"},
    ]
  },
  {
    name:"Brown",
    colors:[
      {name: "Cornsilk", code: "#FFF8DC"},
      {name: "BlanchedAlmond", code: "#FFEBCD"},
      {name: "Bisque", code: "#FFE4C4"},
      {name: "NavajoWhite", code: "#FFDEAD"},
      {name: "Wheat", code: "#F5DEB3"},
      {name: "BurlyWood", code: "#DEB887"},
      {name: "Tan", code: "#D2B48C"},
      {name: "RosyBrown", code: "#BC8F8F"},
      {name: "SandyBrown", code: "#F4A460"},
      {name: "Goldenrod", code: "#DAA520"},
      {name: "DarkGoldenrod", code: "#B8860B"},
      {name: "Peru", code: "#CD853F"},
      {name: "Chocolate", code: "#D2691E"},
      {name: "SaddleBrown", code: "#8B4513"},
      {name: "Sienna", code: "#A0522D"},
      {name: "Brown", code: "#A52A2A"},
      {name: "Maroon", code: "#800000"},
    ]
  },
  {
    name:"Yellow",
    colors:[
      {name: "Gold", code: "#FFD700"},
      {name: "Yellow", code: "#FFFF00"},
      {name: "LightYellow", code: "#FFFFE0"},
      {name: "LemonChiffon", code: "#FFFACD"},
      {name: "LightGoldenrodYellow", code: "#FAFAD2"},
      {name: "PapayaWhip", code: "#FFEFD5"},
      {name: "Moccasin", code: "#FFE4B5"},
      {name: "PeachPuff", code: "#FFDAB9"},
      {name: "PaleGoldenrod", code: "#EEE8AA"},
      {name: "Khaki", code: "#F0E68C"},
      {name: "DarkKhaki", code: "#BDB76B"},
    ]
  },
  {
    name:"Gray",
    colors:[
      {name: "Gainsboro", code: "#DCDCDC"},
      {name: "LightGray", code: "#D3D3D3"},
      {name: "Silver", code: "#C0C0C0"},
      {name: "DarkGray", code: "#A9A9A9"},
      {name: "Gray", code: "#808080"},
      {name: "DimGray", code: "#696969"},
      {name: "LightSlateGray", code: "#778899"},
      {name: "SlateGray", code: "#708090"},
      {name: "DarkSlateGray", code: "#2F4F4F"},
      {name: "Black", code: "#000000"},
    ]
  },
  {
    name:"Red",
    colors:[
      {name : "IndianRed", code:"#CD5C5C"},
      {name : "LightCoral", code:"#F08080"},
      {name : "Salmon", code:"#FA8072"},
      {name : "DarkSalmon", code:"#E9967A"},
      {name : "LightSalmon", code:"#FFA07A"},
      {name : "Crimson", code:"#DC143C"},
      {name : "Red", code:"#FF0000"},
      {name : "FireBrick", code:"#B22222"},
      {name : "DarkRed", code:"#8B0000"},
    ]
  },
  {
    name:"Pink",
    colors:[
      {name: "Pink", code: "#FFC0CB"},
      {name: "LightPink", code: "#FFB6C1"},
      {name: "HotPink", code: "#FF69B4"},
      {name: "DeepPink", code: "#FF1493"},
      {name: "MediumVioletRed", code: "#C71585"},
      {name: "PaleVioletRed", code: "#DB7093"},
    ]
  },
  {
    name:"Orange",
    colors:[
      {name: "LightSalmon", code: "#FFA07A"},
      {name: "Coral", code: "#FF7F50"},
      {name: "Tomato", code: "#FF6347"},
      {name: "OrangeRed", code: "#FF4500"},
      {name: "DarkOrange", code: "#FF8C00"},
      {name: "Orange", code: "#FFA500"},
    ]
  },
]