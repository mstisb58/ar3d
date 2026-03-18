const createContent = (
    id,
    tracker_name = "tracker",
    tracker_type = "pat",  // "pat" (Marker) or "fset" (NFT)
    object_name = "object",
    object_type = "glb"    // "glb", "mp4", "png", "jpg"
) => {
    // 拡張子から表示タイプを自動判別
    const isVideo = ["mp4", "webm"].includes(object_type.toLowerCase());
    const isImage = ["png", "jpg", "jpeg"].includes(object_type.toLowerCase());
    const isModel = object_type.toLowerCase() === "glb";

    return {
        id,
        type: tracker_type === "pat" ? "marker" : "nft",
        // NFTは拡張子なし、Markerは.pattが必要
        trackerPath: `assets/${id}/${tracker_name}${tracker_type === "pat" ? ".patt" : ""}`,
        objectPath: `assets/${id}/${object_name}.${object_type}`,
        renderType: isVideo ? "video" : isImage ? "image" : "model"
    };
};

// --- ここにコンテンツを追加していく ---
const arContents = [
    // NFT + 3Dモデルの例
    createContent("test_ntf_glb", "pinball", "fset", "object", "glb"),

    // Marker + 2D動画の例
    createContent("test_pat_mp4", "hiro", "pat", "object", "mp4"),

];