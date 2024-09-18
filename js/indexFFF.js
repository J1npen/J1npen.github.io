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
		
		
// 获取按钮和个人简介区域
const toggleButton = document.getElementById("toggleButton");
const profileSection = document.getElementById("profileSection");
const contentSection = document.getElementById("contentSection");

// 点击按钮时切换显示状态
toggleButton.addEventListener("click", function() {
	if (profileSection.classList.contains("hidden")) {
		// 显示个人简介，隐藏内容展示区
		profileSection.classList.remove("hidden");
		contentSection.classList.add("hidden");
		toggleButton.textContent = "文章内容";
	} else {
		// 隐藏个人简介，显示内容展示区
		profileSection.classList.add("hidden");
		contentSection.classList.remove("hidden");
		toggleButton.textContent = "个人简介";
	}
});