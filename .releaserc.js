export default {
	extends: {
		branches: ["main"], // 只在 main 分支上进行发布
		plugins: [
			"@semantic-release/commit-analyzer", // 分析commit
			"@semantic-release/release-notes-generator", // 生成release notes
			[
				"@semantic-release/changelog", // 生成changelog
				{
					changelogFile: "CHANGELOG.md",
				},
			],
			// [
			//   "@semantic-release/npm", // 发布到 npm
			//   {
			//     npmPublish: false,
			//   },
			// ],
			// [
			//   "@semantic-release/github", // 创建 GitHub Release 和 tag
			//   {
			//     assets: [
			//       // 'assets' 定义了要上传到 Release 的文件
			//       // 假设我们的 CD 流程会先构建并打包成 'dist.zip'
			//       { path: "dist.zip", label: "Distribution Package" },
			//     ],
			//   },
			// ],
			[
				"@semantic-release/git", // 发布到git
				{
					assets: ["CHANGELOG.md", "pnpm-lock.yaml", "package.json"],
					message:
						"chore(release): ${nextRelease.version}\n\n${nextRelease.notes}",
				},
			],
		],
	},
};
