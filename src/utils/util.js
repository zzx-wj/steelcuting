export const steelArr = [
  {
    name: '标准6棱杆',
    key: 'style 1',
    opt: ({
      overallWidth,
      overallHeight,
      overallThickness
    }) => {
      const scribing90 = (overallWidth - 2 * overallThickness) / 2;//90°划线
      const bevelScribing = (scribing90 * 2 - (scribing90 + 0.05)) * 0.707;//斜面划线
      const heightScribing = Math.abs(bevelScribing * 0.707 - (overallHeight - 2 * overallThickness));//高度划线
      return {
        scribing90,
        bevelScribing,
        heightScribing,
      }
    },
  },
  {
    name: 'style 2',
    key: 'style 2',
    opt: ({
      overallWidth,
      overallHeight,
      overallThickness
    }) => {
      const scribing90 = (overallWidth - 2 * overallThickness) / 2;//90°划线
      const bevelScribing = (scribing90 * 2 - (scribing90 + 0.05)) * 0.707;//斜面划线
      const heightScribing = Math.abs(bevelScribing * 0.707 - (overallHeight - 2 * overallThickness));//高度划线
      return {
        scribing90,
        bevelScribing,
        heightScribing,
      }
    },
  },
  {
    name: 'style 3',
    key: 'style 3',
    opt: ({
      overallWidth,
      overallHeight,
      overallThickness
    }) => {
      const scribing90 = (overallWidth - 2 * overallThickness) / 2;//90°划线
      const bevelScribing = (scribing90 * 2 - (scribing90 + 0.05)) * 0.707;//斜面划线
      const heightScribing = Math.abs(bevelScribing * 0.707 - (overallHeight - 2 * overallThickness));//高度划线
      return {
        scribing90,
        bevelScribing,
        heightScribing,
      }
    },
  },
  {
    name: 'style 4',
    key: 'style 4',
    opt: ({
      overallWidth,
      overallHeight,
      overallThickness
    }) => {
      const scribing90 = (overallWidth - 2 * overallThickness) / 2;//90°划线
      const bevelScribing = (scribing90 * 2 - (scribing90 + 0.05)) * 0.707;//斜面划线
      const heightScribing = Math.abs(bevelScribing * 0.707 - (overallHeight - 2 * overallThickness));//高度划线
      return {
        scribing90,
        bevelScribing,
        heightScribing,
      }
    },
  },
  {
    name: 'style 5',
    key: 'style 5',
    opt: ({
      overallWidth,
      overallHeight,
      overallThickness
    }) => {
      const scribing90 = (overallWidth - 2 * overallThickness) / 2;//90°划线
      const bevelScribing = (scribing90 * 2 - (scribing90 + 0.05)) * 0.707;//斜面划线
      const heightScribing = Math.abs(bevelScribing * 0.707 - (overallHeight - 2 * overallThickness));//高度划线
      return {
        scribing90,
        bevelScribing,
        heightScribing,
      }
    },
  },
]