document.getElementById("wechaticon").addEventListener("click", function() {
            // 要复制的文本
            const textToCopy = "Jinpen_Wechat";

            // 使用 Clipboard API 复制文本到剪切板
            navigator.clipboard.writeText(textToCopy).then(function() {
                // 当复制成功时，显示提示
                document.getElementById("copyMessage").textContent = "复制成功！";
            }).catch(function(error) {
                // 当复制失败时，显示提示
                document.getElementById("copyMessage").textContent = "复制失败，请重试。";
                console.error('复制失败：', error);
            });
        });
