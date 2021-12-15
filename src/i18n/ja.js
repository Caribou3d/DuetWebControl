export default {
	language: '日本語',
	'$vuetify': {
		badge: 'バッジ',
		close: '閉じる',
		dataIterator: {
			noResultsText: '該当するレコードがありません',
			loadingText: '読込中...',
		},
		dataTable: {
			itemsPerPageText: '1ページあたりの行:',
			ariaLabel: {
				sortDescending: '降順ソート',
				sortAscending: '昇順ソート',
				sortNone: 'ソートされていません.',
				activateNone: 'ソート解除',
				activateDescending: '降順ソート有効.',
				activateAscending: '昇順ソート有効.',
			},
			sortBy: '並び替え',
		},
		dataFooter: {
			itemsPerPageText: '1ページあたりのアイテム:',
			itemsPerPageAll: 'All',
			nextPage: '次のページ',
			prevPage: '前のページ',
			firstPage: '最初のページ',
			lastPage: '最後のページ',
			pageText: '{0}-{1} of {2}',
		},
		datePicker: {
			itemsSelected: '{0} 選択中',
		},
		noDataText: 'データがありません',
		carousel: {
			prev: '前のデータ',
			next: '次のデータ',
			ariaLabel: {
				delimiter: '{1} の要素 {0} ',
			},
		},
		calendar: {
			moreEvents: '{0} more',
		},
		fileInput: {
			counter: '{0} 個のファイル',
			counterSize: '{0} 個のファイル (全体 {1} 個)',
		},
		timePicker: {
			am: '午前',
			pm: '午後',
		},
	},
	button: {
		add: {
			caption: '追加'
		},
		connect: {
			connect: '接続',
			connecting: '接続中...',
			disconnect: '切断',
			disconnecting: '切断中...'
		},
		emergencyStop: {
			caption: '緊急停止',
			title: 'ソフトリセットを実施 (M112+M999)'
		},
		home: {
			caption: 'ホーム {0}',
			captionAll: 'ホーム XYZ',
			title: 'ホーム {0} 軸 (G28 {0})',
			titleAll: 'ホーム All (G28)'
		},
		newDirectory: {
			caption: '新しいディレクトリ'
		},
		newFilament: {
			caption: '新しいフィラメント'
		},
		newFile: {
			caption: '新しいファイル'
		},
		refresh: {
			caption: 'リフレッシュ'
		},
		reset: {
			caption: '機械をリセット',
			title: 'リセットのためM999を機械へ送信'
		},
		upload: {
			gcodes: {
				caption: 'Gコードファイル アップロード',
				title: '1つもしくは複数のGコードファイルをアップロード（ドラッグアンドドロップ可）'
			},
			start: {
				caption: 'アップロード&スタート',
				title: '1つもしくは複数のGコードファイルをアップロード＆スタート（ドラッグアンドドロップ可）'
			},
			firmware: {
				caption: 'ファームウェアファイルをアップロード',
				title: '1つもしくは複数のファームウェアファイルをアップロード（ドラッグアンドドロップ可）'
			},
			macros: {
				caption: 'マクロファイル アップロード',
				title: '1つもしくは複数のマクロファイルをアップロード（ドラッグアンドドロップ可）'
			},
			filaments: {
				caption: 'フィラメント設定ファイル アップロード',
				title: '1つもしくは複数のフィラメントconfigをアップロード（ドラッグアンドドロップ可）'
			},
			menu: {
				caption: 'メニューファイル アップロード',
				title: '1つもしくは複数のメニューファイルをアップロード（ドラッグアンドドロップ可）'
			},
			system: {
				caption: 'システムファイル アップロード',
				title: '1つもしくは複数のシステムファイルをアップロード（ドラッグアンドドロップ可）'
			},
			web: {
				caption: 'webファイル アップロード',
				title: '1つもしくは複数のwebファイルをアップロード（ドラッグアンドドロップ可）'
			},
			plugin: {
				caption: 'プラグインをインストール',
				title: 'プラグインファイルをアップロード＆スタート（ドラッグアンドドロップ可）'			
			},
			update: {
				caption: 'アップデート&インストール',
				title: 'アップデートファイルをアップロードしてインストール（ドラッグアンドドロップ可）'
			}
		}
	},
	chart: {
		layer: {
			caption: 'レイヤーチャート',
			layerTime: 'レイヤー時間',

			showLastLayers: 'ラスト {0} レイヤー表示',
			showAllLayers: 'すべてのレイヤーを表示',

			layer: 'レイヤー {0}',
			layerDuration: 'レイヤー時間: {0}',
			layerHeight: 'レイヤー高さ: {0}',
			filamentUsage: 'フィラメント使用量: {0}',
			fractionPrinted: '進捗: {0}'
		},
		temperature: {
			caption: '温度チャート',
			heater: 'ヒーター {0}',
			sensor: 'センサー {0}',
			noData: 'データなし'
		}
	},
	dialog: {
		changeMoveStep: {
			title: '移動量変更',
			prompt: 'クリックしたボタンに新しい値を入力してください:'
		},
		configUpdated: {
			title: '新しい設定を適用しますか？',
			prompt: 'メインボードの再起動、または設定ファイルの再実行を行いますか？IOポートを削除したり、ドライバの割り当てを変更した場合は、メインボードをリセットすることをお勧めします。',
			reset: 'メインボードをリセット',
			runConfig: '設定ファイルを実行'
		},
		connect: {
			title: 'マシンへ接続',
			prompt: '接続するマシンのホスト名とパスワードを入力してください:',
			hostPlaceholder: 'ホスト名',
			hostRequired: 'ホスト名が必要です',
			passwordPlaceholderOptional: 'パスワード (オプション)',
			passwordPlaceholder: 'パスワード',
			passwordRequired: 'パスワードが必要です',
			connect: '接続'
		},
		connection: {
			connecting: '接続中...',
			disconnecting: '切断中...',
			updating: 'アップデートがインストールされるまでお待ちください...',
			reconnecting: '接続が失われました、再接続を試みています...',
			standBy: 'お待ちください...'
		},
		editExtrusionAmount: {
			title: '押出し量の変更',
			prompt: 'クリックしたボタンに新しい量を入力してください:'
		},
		editExtrusionFeedrate: {
			title: '押出し速度の変更',
			prompt: 'クリックしたボタンに新しい量を入力してください:'
		},
		factoryReset: {
			title: 'ファクトリーリセットを行いますか？',
			prompt: '工場出荷時リセットを実行してもよろしいですか？保存された設定はすべて失われます'
		},
		filament: {
			titleChange: 'フィラメント変更',
			titleLoad: 'フィラメント読み込み',
			prompt: 'フィラメントを選択してください:',
			noFilaments: 'フィラメントがありません'
		},
		fileEdit: {
			gcodeReference: 'G-Codeリファレンス',
			menuReference: 'メニューリファレンス',
			save: '保存',
			confirmClose: 'ファイルが変更されています。先に進むと、変更内容が失われます'
		},
		fileTransfer: {
			uploadingTitle: 'ファイルアップロード中 {0} / {1}, {2}% 完了',
			uploadDoneTitle: 'アップロード完了!',
			uploadFailedTitle: 'アップロード失敗!',
			downloadingTitle: 'ファイルダウンロード中 {0} / {1}, {2}% 完了',
			downloadDoneTitle: 'ダウンロード完了',
			downloadFailedTitle: 'ダウンロード失敗!',
			filename: 'ファイル名',
			size: 'サイズ',
			progress: '進捗',
			currentSpeed: '現在の速度: {0}',
			cancelUploads: 'アップロードのキャンセル',
			cancelDownloads: 'ダウンロードのキャンセル'
		},
		meshEdit: {
			title: 'メッシュパラメータをセット',
			radius: 'プローブ半径',
			spacing: '間隔',
			startCoordinate: ' {0} 方向開始座標',
			endCoordinate: ' {0} 方向終了座標',
			spacingDirection: '{0} 方向の間隔'
		},
		newDirectory: {
			title: '新しいディレクトリ',
			prompt: '新しいディレクトリ名を入力してください:'
		},
		newFilament: {
			title: '新しいフィラメント',
			prompt: '新しいフィラメント名を入力してください:'
		},
		newFile: {
			title: '新しいファイル',
			prompt: '新しいファイル名を入力してください:'
		},
			pluginInstallation: {
				installation: 'プラグインインストール',
				prompt: '以下のプラグインがインストールされます:',
				by: 'by {0}',
				license: 'ライセンス: {0}',
				homepage: 'ホームページ:',
				contents: '本パッケージは、以下のソフトウェアコンポーネントを提供します',
				dsf: 'Duet Software Framework',
				dwc: 'Duet Web Control',
				rrf: 'RepRapFirmware',
				prerequisites: '前提条件',
				version: 'バージョン {0}',
				noPluginSupport: '外部プラグインの利用不可',
				rootSupport: 'Super-Userプラグインのサポート',
				invalidManifest: '無効なplugin manifest',
				permissions: '必要なパーミッション',
				dwcWarning: 'このプラグインには、ウェブインターフェイス用のコンポーネントが含まれています。ブラウザセッションでの権限チェックができないため、システムを操作され、セキュリティ上の危険性が生じ、セットアップに物理的な損害が発生する可能性があります。',
				rootWarning: 'このプラグインはスーパーユーザー権限を必要とするため、接続されたSBCを再設定したり、悪意のあるソフトウェアをインストールする可能性があります。これは、セットアップの物理的な損傷につながる可能性があります。',
				sbcPermissions: 'SBC上で動作するプラグインは、以下が必要です',
				noSpecialPermissions: 'このプラグインは特別なパーミッションを必要としません。',
				ready: 'Installation Ready',
				readyMessage: 'これでプラグインをインストールする準備が整いました。この最後のステップに進む前に、信頼できるプラグイン作者かどうか必ず確認してください。',
				readyDisclaimer: 'このサードパーティプラグインのインストールに起因する潜在的な損害について、Duet3D Ltdは責任を負わないことに同意してください。',
				checkboxDisclaimer: '私はリスクを受け入れ、このプラグインをインストールします',
				progress: 'Installation Progress',
				progressText: 'プラグインのインストールが完了するまでお待ちください。',
				installationSuccess: 'インストール完了!',
				installationFailed: 'インストール失敗!',
				cancel: 'キャンセル',
				back: '戻る',
				next: '次へ',
				finish: '終了'
		},
		renameFile: {
			title: 'ファイルまたはディレクトリの名前を変更する',
			prompt: '新しい名前を入力してください:'
		},
		resetHeaterFault: {
			title: 'ヒーター異常をリセット',
			prompt: 'ヒーター{0}で異常が発生しました。続ける前に機械の電源を切り、配線をチェックすることを強くお勧めします。これが物理的な問題ではないと確信している場合は、**自己責任**でヒーターフォルトをリセットすることができます。これは**推奨されず**、さらなる問題を引き起こす可能性があることに注意してください。どうしますか？',
			resetFault: 'リセット'
		},
		runMacro: {
			title: '{0} 実行',
			prompt: '{0}を実行しますか？'
		},
		startJob: {
			title: '{0} スタート',
			prompt: '{0}をスタートしますか？'
		},
		update: {
			title: 'アップデートをインストールしますか？',
			prompt: '少なくとも1つのファームウェアアップデートがアップロードされています。今すぐインストールしますか？',
			resetTitle: 'ファームウェアをリセットしますか?',
			resetPrompt: '拡張ボードのアップデートをインストールしました。メインコントローラを再起動し、以前の設定に戻しますか？',
			sbcWarning: 'SBCモードで動作しています。DWCによるファームウェアのバージョンアップは、ファームウェアの開発元からアドバイスがあった場合のみ行ってください。'
		},
		inputRequired: '値を入力してください',
		numberRequired: '有効な番号を入力してください'
	},
	directory: {
		menu: 'Menu ディレクトリ',
		filaments: 'Filaments ディレクトリ',
		firmware: 'Firmware ディレクトリ',
		gcodes: 'G-Codes ディレクトリ',
		macros: 'Macros ディレクトリ',
		system: 'System ディレクトリ',
		web: 'WWW ディレクトリ'
	},
	error: {
		notImplemented: '{0}が実装されていません',
		invalidPassword: '無効なパスワードです!',
		noFreeSession: 'フリーなセッションがありません!',
		connect: '{0}への接続に失敗',
		disconnect: '{0}から正しく切断できませんでした',
		disconnected: '接続が終了したため、アクションを完了できませんでした',
		cancelled: 'オペレーションは中止されました',
		network: 'ネットワークエラー',
		timeout: 'HTTPリクエスト タイムアウト',
		driveUnmounted: 'ターゲットドライブがアンマウント',
		directoryNotFound: 'ディレクトリ {0} が見つかりません',
		fileNotFound: 'ファイル {0} が見つかりません',
		invalidHeightmap: '無効なハイトマップ',
		operationFailed: 'オペレーション失敗 (原因: {0})',
		uploadStartWrongFileCount: '1つのファイルのみアップロード＆スタート可能',
		uploadNoSingleZIP: '一度にアップロードできるのは1つのZIPファイルのみ',
		uploadNoFiles: 'この ZIP には使用可能なファイルが含まれていません',
		uploadDecompressionFailed: 'ZIPファイルの解凍に失敗しました',
		codeResponse: '不適切な応答を受信したため、コードを実行できませんでした',
		codeBuffer: 'バッファスペースを使い果たしたため、コードを実行することができました',
		enterValidNumber: '有効な番号を入力してください',
		turnOffEverythingFailed: 'すべてをオフにするのに失敗しました',
		filelistRequestFailed: 'ファイルのリストの取得に失敗しました',
		fileinfoRequestFailed: '{0}のファイルの情報取得に失敗しました',
		filamentsLoadFailed: 'フィラメントの読み込みに失敗しました',
		move: '{0} から {1}への移動に失敗しました'
	},
	events: {
		connected: '{0}へ接続',
		connectionLost: '{0}の接続維持に失敗しました',
		emergencyStop: '緊急停止、再接続を試みます...',
		reconnecting: '接続中断、再接続を試みています...',
		reconnected: '接続確立',
		disconnected: '{0}から切断されました'
	},
	generic: {
		ok: 'OK',
		confirm: '確認',
		yes: 'Yes',
		no: 'No',
		close: '閉じる',
		reset: 'リセット',
		noValue: '該当なし',
		loading: '読み込み中',
		error: 'エラー',
		info: '情報',
		warning: '注意',
		success: '成功',
		heaterStates: {
			off: 'オフ',
			standby: 'スタンバイ',
			active: '有効',
			fault: '失敗',
			tuning: 'チューニング',
			offline: 'オフライン'
		},
		status: {
			disconnected: '切断されました',
			starting: '開始中',
			updating: 'アップデート中',
			off: 'オフ',
			halted: '停止',
			pausing: '一時停止中',
			paused: '一時停止',
			resuming: '再開中',
			cancelling: 'キャンセル中',
			printing: 'プリント中',
			processing: '処理中',
			simulating: 'シミュレーション中',
			busy: 'ビジー',
			changingTool: '工具交換中',
			idle: 'アイドル',
			unknown: 'Unknown'
		},
		rpm: 'RPM',
		sdCard: 'SD Card {0}',
		mounted: 'マウントされています',
		notMounted: 'マウントされていません',
		extracting: '展開中',
		uploading: 'アップロード中',
		active: '有効',
		standby: 'スタンバイ'
	},
	input: {
		code: {
			send: '送信',
			placeholder: 'コード送信...'
		},
		addTemperature: '新しい温度の値',
		addRPM: '新しいプリセットの値'
	},
	jobProgress: {
		simulating: '{0} シミュレーション中, {1} 完了',
		simulated: '{0} シミュレーション, 100 % 完了',
		processing: '{0} 処理中, {1} 完了',
		processed: '{0} 処理, 100 % 完了',
		printing: '{0} 加工中, {1} 完了',
		printed: '{0} 加工, 100 % 完了',
		noJob: 'ジョブなし',
		layer: 'レイヤー {0} / {1}',
		filament: 'フィラメント使用量: {0}',
		filamentRemaining: '残り {0}'
	},
	list: {
		baseFileList: {
			fileName: 'ファイル名',
			size: 'サイズ',
			lastModified: '最終変更',
			download: 'ダウンロード',
			edit: 'ファイル編集',
			rename: '名前変更',
			delete: '削除',
			downloadZIP: 'ZIPとしてダウンロード',
			noFiles: 'ファイルやディレクトリはありません',
			driveUnmounted: 'ドライブ アンマウント',
			goUp: '上へ'
		},
		menu: {
			noFiles: 'ファイルがありません'
		},
		eventLog: {
			date: '日時',
			type: 'タイプ',
			message: 'イベント',
			noEvents: 'イベントなし',
			clear: 'クリア',
			downloadText: 'Textとして保存',
			downloadCSV: 'CSVとして保存'
		},
		filament: {
			noFilaments: 'フィラメントなし'
		},
		firmware: {
			installFile: 'ファームウェアファイルのインストール',
			noFiles: 'ファームウェアファイルなし'
		},
		macro: {
			caption: 'マクロ',
			noMacros: 'マクロなし',
			run: 'マクロ実行',
			root: 'ルートディレクトリ'
		},
		jobs: {
			height: 'オブジェクト高さ',
			layerHeight: 'レイヤー高さ',
			filament: 'フィラメント使用量',
			printTime: 'ジョブ時間',
			simulatedTime: 'シミュレーション時間',
			generatedBy: 'Generated by',

			noJobs: 'ジョブなし',
			start: 'スタート',
			simulate: 'シミュレーション'
		},
		system: {
			noFiles: 'システムファイルなし',
			configToolNote: 'コンフィグツールにて編集'
		}
	},
	menu: {
		control: {
			caption: '機械操作',
			status: 'ステータス',
			dashboard: 'ダッシュボード',
			console: 'コンソール',
		},
		job: {
			caption: '現在のジョブ',
			status: 'ステータス',
			webcam: 'webカメラ',
		},
		files: {
			caption: 'ファイル管理',
			jobs: 'ジョブ',
			filaments: 'フィラメント',
			macros: 'マクロ',
			menu: 'ディスプレイ',
			system: 'システム',
			web: 'Web'
		},
		plugins: {
			caption: 'プラグイン'
		},
		settings: {
			caption: '設定',
			general: '全般',
			machine: '機械固有'
		}
	},
	notification: {
		compress: {
			title: 'ファイルの圧縮中...',
			message: 'ファイル圧縮中のためお待ちください...',
			errorTitle: 'ファイルの圧縮に失敗しました'
		},
		decompress: {
			title: 'ファイルの解凍中...',
			message: 'ファイルが解凍されるまで、しばらくお待ちください...',
			errorTitle: 'ファイルの解凍に失敗しました'
		},
		delete: {
			errorTitle: '{0}の削除に失敗しました',
			errorMessageDirectory: 'このディレクトリが空であることを確認してください',
			success: '{0}の削除に成功しました',
			successMultiple: '{0}個のファイルの削除に成功しました'
		},
		deleteFilament: {
			errorTitle: 'フィラメントの削除に失敗しました',
			errorStillLoaded: '選択されたフィラメントのうち少なくとも1つがまだロードされています。処理前にそれらをアンロードしてください',
			errorSubDirectories: 'フィラメント {0} にはサブディレクトリが含まれています。それらを手動で削除して、もう一度試してみてください。'
		},
		download: {
			title: 'ダウンロード中 {0} @ {1}, {2}% 完了',
			message: 'ファイルがダウンロードされるまでお待ちください...',
			success: '{1}にて{0}のダウンロードに成功',
			error: '{0}のダウンロードに失敗しました'
		},
		message: 'メッセージ',
		mount: {
			successTitle: 'SDカード マウント',
			errorTitle: 'SDカードのマウントに失敗'
		},
		newDirectory: {
			errorTitle: 'ディレクトリの作成に失敗しました',
			successTitle: 'ディレクトリを作成しました',
			successMessage: 'ディレクトリの作成に成功 {0}'
		},
		newFilament: {
			errorTitle: 'フィラメントの作成に失敗',
			errorTitleMacros: 'フィラメント マクロの作成に失敗',
			successTitle: 'フィラメント作成',
			successMessage: '{0}のフィラメントを作成しました'
		},
		plugins: {
			started: 'プラグインが起動しました',
			startError: 'プラグインの起動に失敗しました',
			stopped: 'プラグインが停止しました',
			stopError: 'プラグインの起動に失敗しました',
			uninstalled: 'プラグインはアンインストールされました',
			uninstallError: 'プラグインのアンイストールに失敗しました'
		},
		rename: {
			success: '{0} から {1}への名前変更に成功しました',
			error: '{0} から {1}への名前を変更に失敗しました',
		},
		renameFilament: {
			errorTitle: 'フィラメントの名前を変更に失敗しました',
			errorStillLoaded: 'このフィラメントはまだロードされています。先に進む前にアンロードしてください'
		},
		responseTooLong: 'レスポンスが長すぎます、コンソールを参照してください',
		upload: {
			title: 'アップロード中 {0} @ {1}, {2}% 完了',
			message: 'ファイルがアップロードされるまでお待ちください...',
			success: '{1}にて{0}のアップロードに成功',
			error: '{0}のアップロードに失敗しました'
		}
	},
	panel: {
		atx: {
			caption: 'ATX電源',
			on: 'オン',
			off: 'オフ'
		},
		babystepping: {
			caption: 'Z軸オフセット',
			current: '現在のオフセット量: {0}'
		},
		extrude: {
			caption: '押出し制御',
			mix: 'ミックス',
			mixRatio: 'ミックス比率:',
			amount: 'フィード量 {0}:',
			feedrate: 'フィードレート {0}:',
			retract: '引き込み',
			extrude: '押出し'
		},
		extrusionFactors: {
			caption: '押出し ファクター',
			changeVisibility: '対象変更',
			extruder: 'エクストルーダー {0}',
			noExtruders: 'エクストルーダー'
		},
		fan: {
			caption: 'ファン制御',
			selection: 'ファン選択:',
			toolFan: '工具ファン',
			fan: 'ファン {0}'
		},
		fans: {
			caption: 'ファン',
			changeVisibility: '対象変更',
			toolFan: '工具ファン',
			fan: 'ファン {0}',
			noFans: 'ファンなし'
		},
		jobControl: {
			caption: 'ジョブ制御',
			cancelJob: 'ジョブキャンセル',
			cancelPrint: 'プリントキャンセル',
			cancelSimulation: 'シミュレーションキャンセル',
			pauseJob: 'ジョブ停止',
			pausePrint: 'プリント停止',
			pauseSimulation: 'シミュレーション停止',
			resumeJob: 'ジョブ再開',
			resumePrint: 'プリント再開',
			resumeSimulation: 'シミュレーション再開',
			repeatJob: '再スタート',
			repeatPrint: '再プリント',
			repeatSimulation: '再シミュレーション',
			autoSleep: 'End G-Code有効'
		},
		jobData: {
			caption: '取得データ',
			warmUpDuration: 'ウォームアップ時間',
			currentLayerTime: '現在のレイヤーの時間',
			lastLayerTime: 'ラストレイヤーの時間',
			jobDuration: 'ジョブ時間'
		},
		jobEstimations: {
			caption: '推定時間',
			filament: 'フィラメント使用量',
			file: 'ファイルの進捗',
			layer: 'レイヤー時間',
			slicer: 'スライサー',
			simulation: 'シミュレーション'
		},
		jobInfo: {
			caption: 'ジョブ情報',
			height: '高さ:',
			layerHeight: 'レイヤー高さ:',
			filament: 'フィラメント使用量:',
			generatedBy: 'Generated by:'
		},
		movement: {
			caption: '機械の動作',
			compensation: '補正＆キャリブレーション',
			runBed: 'ベッド レベリング(G32)',
			runDelta: 'デルタ型 キャリブレーション (G32)',
			compensationInUse: '使用中の補正: {0}',
			disableBedCompensation: 'Bed Compensation無効化 (M561)',
			disableMeshCompensation: 'Mesh Compensation無効化 (G29 S2)',
			editMesh: 'Mesh Compensationのエリアを定義 (M557)',
			runMesh: 'Mesh Compensationを実行 (G29)',
			loadMesh: 'SDカードからハイトマップをロード(G29 S1)',
			axesNotHomed: '以下の軸はホームにありません:|以下の軸はホームにありません:',
			noAxes: 'No Axes',
			workzero: '原点へ移動'
		},
		settingsAbout: {
			caption: 'About',
			developedBy: 'Webインターフェースの開発者:',
			for: 'for',
			licensedUnder: '以下でライセンスされています:'
		},
		settingsAppearance: {
			caption: '外観',
			darkTheme: 'ダークテーマ',
			language: '言語',
			binaryFileSizes: 'バイナリファイルのサイズを使用する',
			binaryFileSizesTitle: 'ファイルサイズは、1000(SI)ではなく1024(IEC)を基準に表示されます',
			disableAutoComplete: '自動補完を無効にする',
			disableAutoCompleteTitle: 'コードまたは温度入力時にオートコンプリートリストを表示しない',
			dashboardModeTitle: 'Dashboard Mode'
		},
		settingsCommunication: {
			caption: '通信',
			pingInterval: 'アイドル時のPING間隔 (ms)',
			updateDelay: '更新ディレイ (ms)',
			ajaxRetries: 'AJAXの最大再試行回数',
			updateInterval: 'Updateインターバル({0})',
			extendedUpdateEvery: 'Extendedステータス更新間隔',
			fileTransferRetryThreshold: 'ファイル転送の再試行しきい値 ({0})',
			crcUploads: 'アップロードにCRC32チェックサムを使用',
			unavailable: '利用可能な設定がありません'
		},
		settingsElectronics: {
			caption: 'エレクトロニクス',
			diagnostics: '診断',
			board: 'ボード: {0}',
			firmware: 'ファームウェア: {0} ({1})',
			dwsFirmware: 'Duet WiFi Server Version: {0}',
			updateNote: 'Note: システムページからアップデートのインストールができます。'
		},
		settingsEndstops: {
			caption: 'エンドストップ',
			index: '番号',
			triggered: 'Triggered'
		},
		settingsGeneral: {
			caption: '全般',
			factoryReset: '工場出荷時に戻す',
			settingsStorageLocal: 'ローカルストレージに設定を保存',
			settingsSaveDelay: '設定変更時の更新ディレイ ({0})',
			cacheStorageLocal: 'ローカルストレージにキャッシュを保存',
			cacheSaveDelay: 'キャッシュ変更時の更新ディレイ ({0})'
		},
		settingsListItems: {
			caption: 'リスト項目',
			toolTemperatures: '工具温度',
			bedTemperatures: 'ベッド温度',
			chamberTemperatures: 'チャンバー温度',
			spindleRPM: 'スピンドル回転数(RPM)'
		},
		settingsMachine: {
			caption: '機械固有',
			babystepAmount: 'ベイビーステップ量 ({0})',
			moveFeedrate: '移動ボタンの送り速度 ({0})'
		},
		settingsNotifications: {
			caption: '通知',
			notificationErrorsPersistent: 'エラーメッセージを自動的に閉じない',
			notificationTimeout: '通知タイムアウトのデフォルト値 ({0})'
		},
		settingsWebcam: {
			caption: 'ウェブカメラ',
			webcamURL: 'ウェブカメラ URL (optional)',
			webcamUpdateInterval: 'ウェブカメラの更新間隔 ({0})',
			webcamLiveURL: 'ウェブカメラ画像がクリックされたときに開くURL (optional)',
			webcamFix: '画像をリロードする際に、HTTP修飾子を追加しないようにする',
			webcamEmbedded: 'iframeにウェブカメラの画像を埋め込む',
			webcamRotation: 'ウェブカメラの画像を回転する',
			webcamFlip: 'ウェブカメラの画像を反転する',
			flipNone: 'None',
			flipX: 'X反転',
			flipY: 'Y反転',
			flipBoth: 'XY両方反転'
		},
		speedFactor: {
			caption: 'スピード ファクター'
		},
		spindle: {
			title: 'スピンドル',
			spindle: 'スピンドル',
			active: 'アクティブ',
			direction: '方向',
			currentRPM: '現在の回転数',
			setRPM: '回転数をセット',
			on: 'On',
			off: 'Off',
			forward: '正回転',
			reverse: '逆回転'
		},
		status: {
			caption: 'ステータス',
			mode: 'モード: {0}',
			toolPosition: 'ワーク座標',
			machinePosition: '機械座標',
			extruders: 'エクストルーダー',
			extruderDrive: 'Drive {0}',
			speeds: 'スピード',
			requestedSpeed: '要求スピード',
			topSpeed: '最大スピード',
			sensors: 'センサー',
			mcuTemp: 'MCU温度',
			minMax: '最小: {0}, 最大: {1}',
			vIn: 'Vin',
			v12: 'V12',
			fanRPM: 'ファン RPM',
			probe: 'Zプローブ|Zプローブ',
			noStatus: 'No Status'
		},
		tools: {
			caption: '工具',
			controlAll: 'すべて制御',
			turnEverythingOff: 'すべて電源オフ',
			setActiveTemperatures: 'アクティブ温度を設定',
			setStandbyTemperatures: 'スタンバイ温度を設定',
			setToolTemperatures: '工具の温度を設定',
			setBedTemperatures: 'ベッドの温度を設定',
			setChamberTemperatures: 'チャンバーの温度を設定',
			tool: '工具 {0}',
			loadFilament: 'フィラメントをロード',
			changeFilament: 'フィラメントを交換',
			unloadFilament: 'フィラメントをアンロード',
			heater: 'ヒーター {0}',
			current: '現在',
			active: 'アクティブ',
			standby: 'スタンバイ',
			bed: 'ベッド {0}',
			chamber: 'チャンバー {0}',
			extra: {
				caption: 'Extra',
				sensor: 'センサー',
				sensorIndex: 'センサー {0}',
				value: '値',
				showInChart: 'チャートにて表示',
				noItems: 'No Extra Sensors'
			},
			noTools: '工具なし'
		},
		webcam: {
			caption: 'ウェブカメラ監視',
			alt: '(webcam image)'
		}
	},
	pluginPermissions: {
		commandExecution: 'DSFコマンドの実行 (例 G/M/T-codes)',
		codeInterceptionRead: 'G/M/T-codesのコードの読み取り',
		codeInterceptionReadWrite: 'G/M/T-codesのコードの読み取り及び操作',
		managePlugins: 'サードパーティプラグインのインストール、ロード、アンロード、アンインストール',
		manageUserSessions: 'ユーザーセッションの管理',
		objectModelRead: 'オブジェクトモデルの読み込み',
		objectModelReadWrite: 'オブジェクトモデルの読み書き',
		registerHttpEndpoints: '新しいHTTPエンドポイントの作成',
		readFilaments: 'filaments ディレクトリからファイルを読み込む',
		writeFilaments: 'filaments ディレクトリにファイルを書き込む',
		readFirmware: 'firmware ディレクトリからファイルを読み込む',
		writeFirmware: 'firmware ディレクトリにファイルを書き込む',
		readGCodes: 'G-codes ディレクトリからファイルを読み込む',
		writeGCodes: 'G-codes ディレクトリにファイルを書き込む',
		readMacros: 'macros ディレクトリからファイルを読み込む',
		writeMacros: 'macros ディレクトリにファイルを書き込む',
		readMenu: 'menu ディレクトリからファイルを読み込む',
		writeMenu: 'menu ディレクトリにファイルを書き込む',
		readSystem: 'system ディレクトリからファイルを読み込む',
		writeSystem: 'system ディレクトリにファイルを書き込む',
		readWeb: 'web ディレクトリにファイルを読み込む',
		writeWeb: 'web ディレクトリにファイルを書き込む',
		fileSystemAccess: '仮想SDディレクトリ外のファイルへのアクセス',
		launchProcesses: '新しいプロセスの立ち上げ',
		networkAccess: 'ネットワークで通信',
		webcamAccess: 'ウェブカメラデバイスにアクセスする',
		superUser: 'ルートユーザーで実行（危険な可能性あり）'
	},
	plugins: {
		accelerometer: {
			name: '加速度計',
			listTitle: 'CSVファイル',
			none: 'ファイルがありません',
			chartCaption: '加速度サンプル',
			noData: 'サンプルの読み込みなし',
			analysis: '周波数解析',
			samplingRate: 'サンプリングレート (in Hz)',
			start: 'スタート',
			end: '終了',
			wideBand: '広帯域分析',
			analyze: '分析',
			back: '戻る',
			overflowPrompt: {
				title: 'オーバーフローを検知',
				prompt: 'このCSVファイルではオーバーフローが報告されています。本当に続けますか?'
			},
			loadError: 'CSVファイルの読み込みに失敗しました',
			parseError: 'CSVファイルのパースに失敗しました',
			frequency: 'Frequency (in Hz)',
			amplitudes: 'Amplitudes',
			samples: 'Samples',
			accelerations: 'Accelerations (in g)',
			sampleTooltip: 'Sample #{0}',
			frequencyTooltip: '{0} ± {1} Hz'
		},
		autoUpdate: {
			menuCaption: 'アップデート'
		},
		gcodeViewer: {
			caption: 'G-Code Viewer',
			view3D: '3D表示',
			fullscreen: 'フルスクリーン',
			showConfiguration: 'ビューアの設定を表示',
			resetCamera: {
				caption: 'カメラをリセット',
				title: 'カメラをホームポジションに戻す'
			},
			cancelLoad: 'ファイル読み込みのキャンセル',
			reloadView: {
				caption: 'ビューのリロード',
				title: '現在のgcodeを再読み込みします。送り速度の色などの設定を変更するときに使用します。'
			},
			loadCurrentJob: {
				caption: '現在のジョブをロード',
				title: '現在の印刷またはシミュレーションのジョブを読み込む'
			},
			unloadGCode: {
				caption: 'GCodeのアンロード',
				title: '読み込んだgcodeをビューアから削除する'
			},
			loadLocalGCode: {
				caption: 'ローカルGCodeの読み込み',
				title: 'ローカルドライブのファイルをビューアに読み込む'
			},
			showCursor: 'カーソルを表示',
			showTravels: 'Show Travels',
			renderQuality: {
				caption: 'レンダリング品質',
				title: 'ビューアの品質を調整します。レベルが高いほど、より多くの頂点とレンダリングモードが利用可能になる'
			},
			sbc: 'SBC',
			low: 'Low',
			medium: 'Medium',
			high: 'High',
			ultra: 'Ultra',
			max: 'Max',
			forceLineRendering: 'Force Line Rendering',
			transparency: 'Transparency',
			showSolid: 'Show Solid',
			spreadLines: 'Spread Lines',
			extruders: {
				caption: 'エクストルーダー',
				title: 'エクストルーダーのレンダリングに使用する色を設定します'
			},
			tool: 'Tool {0}',
			resetColor: 'Reset Tool Color | Reset Tool Colors',
			renderMode: {
				caption: 'Render Mode | Render Modes',
				title: 'レンダリングモードでは、ビューアでエクストルーダーの色や送り速度の色を設定することが可能'
			},
			color: '色',
			feedrate: '送り速度',
			minFeedrate: '最小送り速度 (mm/s)',
			maxFeedrate: '最大送り速度 (mm/s)',
			minFeedrateColor: '最小送り速度の色',
			maxFeedrateColor: '最大送り速度の色',
			progress: {
				caption: 'Progress',
				title: 'Set the printed color for progress tracking'
			},
			topClipping: 'Top Clipping',
			bottomClipping: 'Bottom Clipping',
			progressColor: 'Progress Color',
			liveZTracking: 'Live Z Tracking',
			settings: '設定',
			background: '背景',
			bedRenderMode: 'ベッドレンダリングモード',
			bed: 'ベッド',
			volume: 'ボリューム',
			showAxes: '軸を表示',
			showObjectLabels: 'オブジェクトのラベルを表示',
			cameraInertia: 'Camera Inertia',
			showObjectSelection: {
				caption: 'Show Object Selection',
				title: 'Enabled if objects could be detected in the current print'
			},
			renderFailed: '前回のレンダリングに失敗しました。レンダリング品質をSBCにて設定',
			showFSOverlay: 'Show Full Screen Overlay',
			useHQRendering: '高画質レンダリング',
			useSpecular: "Use Specular Highlight",
			feature: "Feature"
		},
		heightmap: {
			menuCaption: 'ハイトマップ',
			listTitle: 'ハイトマップ',
			none: 'None',
			scale: 'スケール:',
			orMore: '以上',
			orLess: '以下',
			axes: '軸:',
			notAvailable: 'ハイトマップがありません',
			statistics: '統計情報',
			numPoints: 'ポイント数: {0}',
			radius: 'プローブ半径: {0}',
			area: 'プローブ面積: {0}',
			maxDeviations: '最大偏差: {0} / {1}',
			meanError: '平均誤差: {0}',
			rmsError: 'RMS誤差: {0}',
			display: '表示',
			colorScheme: '配色:',
			terrain: 'Terrain',
			heat: 'Heat',
			invertZ: 'Z座標反転',
			topView: '上面ビュー',
			range: 'レンジ',
			fixed: '固定',
			deviation: '偏差',
			resetView: 'ビューをリセット'
		},
		objectModelBrowser: {
			menuCaption: 'Object Model'
		}
	},
	tabs: {
		generalSettings: {
			caption: '全般'
		},
		machineSettings: {
			caption: '全般'
		},
		plugins: {
			integratedPlugins: '統合されたプラグイン',
			externalPlugins: '外部プラグイン',
			headers: {
				name: '名前',
				author: '作者',
				version: 'バージョン',
				license: 'ライセンス',
				dependencies: '依存関係',
				status: 'ステータス'
			},
			optional: '任意',
			start: '開始',
			partiallyStarted: '部分的に開始',
			started: '動作中',
			stop: '停止',
			deactivated: '無効',
			stopped: '停止中',
			uninstall: 'アンイストール',
			noPlugins: 'プラグインなし',
			refreshNote: 'DWCプラグインのアンロードを終了するため、ページを更新します'
		}
	}
}
