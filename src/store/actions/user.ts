// ####Action Creator
//   action => typeとpayloadをpropに持つobject。
//   そのactionをreturnするのがAction Creator。今回は、addClip(), deleteClip()が該当。
//   dispatchのparamに指定して使う。

export const addClip = ({ clip }) => {
  return {
    type: "ADD_CLIP",
    // ####payload
    //   アクションの実行に必要な任意のデータ。不要な場合はなくても可。
    // clip: clip,
    // 上記と同意
    clip,
  };
};

export const deleteClip = ({ clip }) => {
  return {
    type: "DELETE_CLIP",
    // ####payload
    //   アクションの実行に必要な任意のデータ。不要な場合はなくても可。
    // clip: clip,
    // 上記と同意
    clip,
  };
};
