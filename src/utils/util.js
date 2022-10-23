export const steelArr = [
  /*
  输入值：
  width：宽
  height：高
  thickness：厚度
  bottom：底平面

  输出值：
  sb90：90°划线
  rightSb：直面划线
  bevelSb：斜面划线
  bevel5Sb：斜面5面划线
  bevel17Sb：斜面17面总尺寸
  heightSb：高度划线
  total：总下料尺寸
  */
  {
    name: '菱形',
    title: '菱形',
    key: '001001',
    inputs: [
      { key: 'width', label: "总宽度", },
      { key: 'height', label: "总高度", },
      { key: 'thickness', label: "板厚度", },
    ],
    outputs: [
      { key: 'bevelSb', label: "斜面划线", },
      { key: 'rightSb', label: "直面划线", },
      { key: 'total', label: "总下料尺寸", },
    ],
    opt: ({ width, height, thickness }) => {
      const bevelSb = ((width - thickness * 2) / 2) / 0.94;
      const rightSb = Math.abs(bevelSb * 0.34 * 2 - (height - 3));
      const total = 4 * bevelSb + 2 * rightSb;
      return {
        bevelSb,
        rightSb,
        total,
      }
    },
  },
  {
    name: '标准6棱型杆',
    title: "标准6棱型杆<135° 90°>",
    key: '002002',
    inputs: [
      { key: 'width', label: "总宽度", },
      { key: 'height', label: "总高度", },
      { key: 'thickness', label: "板厚度", },
      { key: 'bottom', label: "底平面", },
    ],
    outputs: [
      { key: 'sb90', label: "90°划线", },
      { key: 'bevelSb', label: "斜面划线", },
      { key: 'heightSb', label: "高度划线", },
      { key: 'total', label: "总下料尺寸", },
    ],
    opt: ({ width, height, thickness, bottom }) => {
      const sb90 = (width - thickness * 2) / 2;
      const bevelSb = (sb90 * 2 - bottom) * 0.707;
      const heightSb = Math.abs(bevelSb * 0.707 - (height - thickness * 2));
      const total = sb90 * 2 + heightSb * 2 + bevelSb * 2 + bottom;
      return {
        sb90,
        bevelSb,
        heightSb,
        total,
      }
    },
  },
  {
    name: '5棱型杆',
    title: '5棱型杆<140° 110° 110°>',
    key: '003003',
    inputs: [
      { key: 'width', label: "总宽度", },
      { key: 'height', label: "总高度", },
      { key: 'thickness', label: "板厚度", },
    ],
    outputs: [
      { key: 'sb90', label: "90°划线", },
      { key: 'bevelSb', label: "斜面划线", },
      { key: 'heightSb', label: "高度划线", },
      { key: 'total', label: "总下料尺寸", },
    ],
    opt: ({ width, height, thickness }) => {
      const sb90 = (width - thickness * 2) / 2;
      const bevelSb = ((width - thickness * 2) / 2) / 0.94;
      const heightSb = Math.abs(bevelSb * 0.34 * 2 - (height - 3));
      const total = sb90 * 2 + heightSb * 2 + bevelSb * 2;
      return {
        sb90,
        bevelSb,
        heightSb,
        total,
      }
    },
  },
  {
    name: '标准5棱型杆',
    title: '标准5棱型杆<120°>',
    key: '004004',
    inputs: [
      { key: 'width', label: "总宽度", },
      { key: 'height', label: "总高度", },
      { key: 'thickness', label: "板厚度", },
    ],
    outputs: [
      { key: 'sb90', label: "90°划线", },
      { key: 'bevelSb', label: "斜面划线", },
      { key: 'heightSb', label: "高度划线", },
      { key: 'total', label: "总下料尺寸", },
    ],
    opt: ({ width, height, thickness }) => {
      const sb90 = (width - thickness * 2) / 2;
      const bevelSb = ((width - thickness * 2) / 2) * 1.18;
      const heightSb = bevelSb / 2 + (thickness * 2 - 2) - height;
      const total = sb90 * 2 + heightSb * 2 + bevelSb * 2;
      return {
        sb90,
        bevelSb,
        heightSb,
        total,
      }
    },
  },
  {
    name: '8棱型杆',
    title: '8棱型杆<斜面每刀150°>',
    key: '005005',
    inputs: [
      { key: 'width', label: "总宽度", },
      { key: 'height', label: "总高度", },
      { key: 'thickness', label: "板厚度", },
    ],
    outputs: [
      { key: 'sb90', label: "90°划线", },
      { key: 'bevelSb', label: "单个斜面划线", },
      { key: 'bevel5Sb', label: "斜面5面总尺寸", },
      { key: 'rightSb', label: "直面划线", },
      { key: 'total', label: "总下料尺寸", },
    ],
    opt: ({ width, height, thickness }) => {
      const sb90 = (width - thickness * 2) / 2;
      const bevelSb = (width - thickness * 2) / 3.732;
      const bevel5Sb = bevelSb * 5;
      const rightSb = (height - thickness * 2) - (bevelSb * 1.366);
      const total = sb90 * 2 + rightSb * 2 + bevel5Sb;
      return {
        sb90,
        bevelSb,
        bevel5Sb,
        rightSb,
        total,
      }
    },
  },
  {
    name: '20棱型杆',
    title: '20棱型杆<斜面每刀170°>',
    key: '006006',
    inputs: [
      { key: 'width', label: "总宽度", },
      { key: 'height', label: "总高度", },
      { key: 'thickness', label: "板厚度", },
    ],
    outputs: [
      { key: 'sb90', label: "90°划线", },
      { key: 'bevelSb', label: "单个斜面划线", },
      { key: 'bevel17Sb', label: "斜面17面总尺寸", },
      { key: 'rightSb', label: "直面划线", },
      { key: 'total', label: "总下料尺寸", },
    ],
    opt: ({ width, height, thickness }) => {
      const sb90 = (width - thickness * 2) / 2;
      const bevelSb = (width - thickness * 2) / 11.428;
      const bevel17Sb = bevelSb * 17;
      const rightSb = (height - thickness * 2) - (bevelSb * 5.214);
      const total = sb90 * 2 + rightSb * 2 + bevel17Sb;
      return {
        sb90,
        bevelSb,
        bevel17Sb,
        rightSb,
        total,
      }
    },
  },
  {
    name: '不等角6棱杆',
    title: '不等角6棱杆<120°*2 、 150°*2>',
    key: '007007',
    inputs: [
      { key: 'width', label: "总宽度", },
      { key: 'height', label: "总高度", },
      { key: 'thickness', label: "板厚度", },
      { key: 'bottom', label: "底平面宽", },
    ],
    outputs: [
      { key: 'sb90', label: "90°划线", },
      { key: 'bevelSb', label: "斜面划线", },
      { key: 'rightSb', label: "直边划线", },
      { key: 'total', label: "总下料尺寸", },
    ],
    opt: ({ width, height, thickness, bottom }) => {
      const sb90 = (width - thickness * 2) / 2;
      const bevelSb = ((width - thickness * 2 - bottom) / 2) / 0.866;
      const rightSb = (height - thickness * 2) - (bevelSb * 0.5);
      const total = sb90 * 2 + rightSb * 2 + bevelSb * 2 + bottom;
      return {
        sb90,
        bevelSb,
        rightSb,
        total,
      }
    },
  },
]