export interface Question {
  stage: string
  question: string
  painPoint: string
  options: Array<{
    text: string
    score: number
    timeImpact: string
    description: string
  }>
}

export const questions: Record<"ja" | "en", Question[]> = {
  ja: [
    // Planning Stage (5 questions) - 純粋なペインポイント分析
    {
      stage: "planning",
      painPoint: "要件定義の曖昧性",
      question: "プロジェクト開始時の要件定義で最も困難で、後工程に大きな影響を与える課題は何ですか？",
      options: [
        {
          text: "ステークホルダー間の要求が矛盾・対立している",
          score: 1,
          timeImpact: "調整に2-4週間",
          description: "部門間で異なる要求があり、優先順位や仕様について合意形成が困難",
        },
        {
          text: "業務要件が曖昧で具体的な仕様に落とし込めない",
          score: 2,
          timeImpact: "仕様化に1-3週間",
          description: "「使いやすく」「効率的に」等の抽象的要求を具体的機能に変換できない",
        },
        {
          text: "要件の優先順位付けができず全て重要扱いになる",
          score: 3,
          timeImpact: "優先順位決定に1-2週間",
          description: "限られた予算・期間で実現可能な範囲を決められない",
        },
        {
          text: "要件変更が頻繁で仕様が安定しない",
          score: 4,
          timeImpact: "変更対応に週5-10時間",
          description: "プロジェクト進行中の要件変更により設計・開発の手戻りが発生",
        },
      ],
    },
    {
      stage: "planning",
      painPoint: "工数見積もりの困難性",
      question: "プロジェクト工数見積もりで最も予測が困難で、計画狂いの原因となる要素は何ですか？",
      options: [
        {
          text: "新技術・未経験技術の習得コストが読めない",
          score: 1,
          timeImpact: "実績との乖離50-100%",
          description: "チームの技術習熟度が不明で学習時間を過小評価してしまう",
        },
        {
          text: "既存システムとの連携・統合の複雑さが見えない",
          score: 2,
          timeImpact: "実績との乖離30-50%",
          description: "レガシーシステムの仕様不明や想定外の制約で工数が膨らむ",
        },
        {
          text: "テスト・バグ修正の工数を軽視してしまう",
          score: 3,
          timeImpact: "実績との乖離20-30%",
          description: "開発工数に注力し品質保証活動の工数を過小評価",
        },
        {
          text: "過去の類似プロジェクトデータが不足・散在している",
          score: 4,
          timeImpact: "見積もり精度10-20%の機会損失",
          description: "参考にできる過去実績の検索・活用が困難で経験と勘に頼る",
        },
      ],
    },
    {
      stage: "planning",
      painPoint: "リソース配置の最適化困難",
      question: "プロジェクトメンバーの配置・管理で最も調整が困難な課題は何ですか？",
      options: [
        {
          text: "メンバーの実際のスキルレベルが把握できていない",
          score: 1,
          timeImpact: "配置ミスで週10-20時間のロス",
          description: "履歴書や面談だけでは実務能力が分からず適材適所ができない",
        },
        {
          text: "複数プロジェクト間でのリソース取り合いが発生",
          score: 2,
          timeImpact: "調整に週5-10時間",
          description: "優秀なメンバーに依頼が集中し、スケジュール調整が困難",
        },
        {
          text: "プロジェクト途中でのメンバー変更・離脱への対応",
          score: 3,
          timeImpact: "引き継ぎに1-2週間",
          description: "急な人員変更で知識継承や代替要員確保に時間を要する",
        },
        {
          text: "チーム内のコミュニケーション・連携不足",
          score: 4,
          timeImpact: "情報共有に週3-5時間",
          description: "メンバー間の情報共有不足で重複作業や認識齟齬が発生",
        },
      ],
    },
    {
      stage: "planning",
      painPoint: "プロジェクトリスクの予測困難",
      question: "プロジェクトリスク管理で最も予測・対応が困難なリスクは何ですか？",
      options: [
        {
          text: "技術的実現可能性の不確実性",
          score: 1,
          timeImpact: "発生時2-8週間の遅延",
          description: "要求仕様が技術的に実現困難と判明し、大幅な設計変更が必要",
        },
        {
          text: "外部システム・ベンダーへの依存リスク",
          score: 2,
          timeImpact: "発生時1-4週間の遅延",
          description: "外部APIの仕様変更やベンダーの遅延でプロジェクトが停滞",
        },
        {
          text: "キーパーソンの離脱・病気等の人的リスク",
          score: 3,
          timeImpact: "発生時1-3週間の遅延",
          description: "重要な知識を持つメンバーが不在になり作業が停止",
        },
        {
          text: "ビジネス環境変化による要件変更リスク",
          score: 4,
          timeImpact: "発生時1-2週間の遅延",
          description: "市場変化や法規制変更で仕様の大幅見直しが必要",
        },
      ],
    },
    {
      stage: "planning",
      painPoint: "進捗管理の可視化困難",
      question: "プロジェクト進捗管理で最も把握が困難で、遅延発見が遅れる要因は何ですか？",
      options: [
        {
          text: "実際の作業進捗率が正確に把握できない",
          score: 1,
          timeImpact: "遅延発見に1-2週間",
          description: "「80%完了」と報告されても実際は50%程度で最後の20%に時間がかかる",
        },
        {
          text: "タスク間の依存関係が複雑で影響が見えない",
          score: 2,
          timeImpact: "影響分析に週5-10時間",
          description: "一つのタスク遅延が他のタスクに与える影響が把握困難",
        },
        {
          text: "メンバーが問題を報告せず個人で抱え込む",
          score: 3,
          timeImpact: "問題発見に1-2週間",
          description: "困難な作業で悩んでいても相談せず、締切直前で問題が発覚",
        },
        {
          text: "進捗報告の粒度が粗く詳細な状況が分からない",
          score: 4,
          timeImpact: "詳細確認に週2-5時間",
          description: "週次報告だけでは日々の細かな問題や遅延要因が見えない",
        },
      ],
    },

    // Analysis Stage (5 questions) - 純粋なペインポイント分析
    {
      stage: "analysis",
      painPoint: "業務理解の困難性",
      question: "現行業務分析で最も理解が困難で、システム設計ミスの原因となる要素は何ですか？",
      options: [
        {
          text: "暗黙知化された業務ルールや例外処理が多い",
          score: 1,
          timeImpact: "調査に業務1つあたり15-30時間",
          description: "文書化されていない業務手順や「いつものやり方」が多数存在",
        },
        {
          text: "業務担当者によって作業手順が異なる",
          score: 2,
          timeImpact: "標準化に業務1つあたり10-20時間",
          description: "同じ業務でも人によってやり方が違い標準的な手順が不明",
        },
        {
          text: "業務フローが複雑で全体像が把握できない",
          score: 3,
          timeImpact: "可視化に業務1つあたり8-15時間",
          description: "部門をまたがる業務で承認フローや情報の流れが複雑",
        },
        {
          text: "現場の業務担当者が多忙で十分なヒアリング時間が取れない",
          score: 4,
          timeImpact: "ヒアリング調整に業務1つあたり5-10時間",
          description: "日常業務に追われる担当者との面談調整が困難",
        },
      ],
    },
    {
      stage: "analysis",
      painPoint: "技術選択の判断困難",
      question: "システムアーキテクチャ設計で最も判断が困難な技術選択は何ですか？",
      options: [
        {
          text: "新技術採用のリスクと既存技術の限界のトレードオフ",
          score: 1,
          timeImpact: "技術検証に20-40時間",
          description: "新技術は魅力的だが習得コストや安定性に不安がある",
        },
        {
          text: "パフォーマンス要件と開発効率のバランス",
          score: 2,
          timeImpact: "性能設計に15-30時間",
          description: "高性能を求めると複雑になり開発・保守コストが増大",
        },
        {
          text: "セキュリティ要件と利便性の両立",
          score: 3,
          timeImpact: "セキュリティ設計に10-20時間",
          description: "強固なセキュリティは利便性を損ない、ユーザビリティが低下",
        },
        {
          text: "将来の拡張性と現在のコストのバランス",
          score: 4,
          timeImpact: "拡張性検討に5-15時間",
          description: "将来を見越した設計は現在のコストを押し上げる",
        },
      ],
    },
    {
      stage: "analysis",
      painPoint: "データ設計の複雑性",
      question: "データベース設計で最も設計が困難で、後の運用に影響する要素は何ですか？",
      options: [
        {
          text: "既存データの品質が悪く移行・統合が困難",
          score: 1,
          timeImpact: "データ移行設計に20-40時間",
          description: "重複データ、不整合データ、欠損データが多く移行作業が複雑",
        },
        {
          text: "正規化レベルとパフォーマンスの最適解が見つからない",
          score: 2,
          timeImpact: "DB設計に15-25時間",
          description: "データ整合性を保つと性能が悪化し、非正規化すると保守が困難",
        },
        {
          text: "将来の業務変更に対応できるデータ構造が設計できない",
          score: 3,
          timeImpact: "柔軟性検討に10-20時間",
          description: "業務変更でデータ構造変更が必要になると大規模改修が発生",
        },
        {
          text: "複数システム間でのデータ整合性確保が困難",
          score: 4,
          timeImpact: "整合性設計に8-15時間",
          description: "システム間でデータの同期タイミングや整合性ルールが複雑",
        },
      ],
    },
    {
      stage: "analysis",
      painPoint: "インターフェース設計の複雑性",
      question: "システム間連携設計で最も設計が困難で、統合時に問題となる要素は何ですか？",
      options: [
        {
          text: "既存システムの仕様が不明・文書化されていない",
          score: 1,
          timeImpact: "仕様調査に15-30時間",
          description: "レガシーシステムの詳細仕様が分からず連携方法が決められない",
        },
        {
          text: "データ形式・項目の定義が統一されていない",
          score: 2,
          timeImpact: "データマッピングに10-20時間",
          description: "システム間で同じ意味のデータでも形式や名称が異なる",
        },
        {
          text: "エラーハンドリング・例外処理の設計が複雑",
          score: 3,
          timeImpact: "例外設計に8-15時間",
          description: "システム間通信でのエラー発生時の処理方法が多様で複雑",
        },
        {
          text: "性能要件とデータ整合性の両立が困難",
          score: 4,
          timeImpact: "性能設計に5-12時間",
          description: "リアルタイム連携は性能に影響し、バッチ処理は整合性に課題",
        },
      ],
    },
    {
      stage: "analysis",
      painPoint: "UI/UX設計の課題",
      question: "ユーザーインターフェース設計で最も設計が困難で、ユーザビリティに影響する課題は何ですか？",
      options: [
        {
          text: "多様なユーザーのスキルレベル・利用環境への対応",
          score: 1,
          timeImpact: "ユーザー分析に15-25時間",
          description: "初心者から上級者まで使いやすいインターフェースの設計が困難",
        },
        {
          text: "業務効率と操作の分かりやすさの両立",
          score: 2,
          timeImpact: "UI設計に10-20時間",
          description: "熟練者向けの効率的操作と初心者向けの分かりやすさが相反",
        },
        {
          text: "画面数・機能数の増加による操作の複雑化",
          score: 3,
          timeImpact: "画面設計に8-15時間",
          description: "機能追加により画面遷移が複雑になりユーザーが迷いやすい",
        },
        {
          text: "レスポンシブ対応・マルチデバイス対応の複雑性",
          score: 4,
          timeImpact: "レスポンシブ設計に5-12時間",
          description: "PC・タブレット・スマホで最適な表示・操作性を実現するのが困難",
        },
      ],
    },

    // Development Stage (5 questions) - 純粋なペインポイント分析
    {
      stage: "development",
      painPoint: "コード品質維持の困難性",
      question: "開発チームでのコード品質維持で最も困難で、品質低下の原因となる課題は何ですか？",
      options: [
        {
          text: "メンバー間のスキルレベル・経験の差が大きい",
          score: 1,
          timeImpact: "品質統一に週10-20時間",
          description: "経験豊富な人と初心者が混在し、コード品質にばらつきが発生",
        },
        {
          text: "コードレビューの時間が十分に確保できない",
          score: 2,
          timeImpact: "レビュー不足で週5-15時間の手戻り",
          description: "スケジュール圧迫でレビューが形式的になり品質問題を見逃す",
        },
        {
          text: "技術的負債が蓄積し新機能開発に影響",
          score: 3,
          timeImpact: "負債対応に週5-10時間",
          description: "過去の妥協的実装が積み重なり、新機能追加が困難になる",
        },
        {
          text: "コーディング規約・ルールが徹底されていない",
          score: 4,
          timeImpact: "規約統一に週3-8時間",
          description: "チーム内でコーディングスタイルが統一されず保守性が低下",
        },
      ],
    },
    {
      stage: "development",
      painPoint: "テスト作成の困難性",
      question: "単体テスト・結合テスト作成で最も困難で、テスト品質に影響する課題は何ですか？",
      options: [
        {
          text: "複雑な業務ロジックのテストケース設計が困難",
          score: 1,
          timeImpact: "テスト設計に機能1つあたり5-15時間",
          description: "条件分岐が多い業務ロジックで網羅的なテストケース作成が困難",
        },
        {
          text: "外部システム連携部分のテストが困難",
          score: 2,
          timeImpact: "モック作成に依存1つあたり3-8時間",
          description: "外部API・DB・ファイルシステムとの連携部分のテストが複雑",
        },
        {
          text: "テストデータの準備・管理が煩雑",
          score: 3,
          timeImpact: "データ準備に週3-8時間",
          description: "様々なパターンのテストデータ作成と管理に時間を要する",
        },
        {
          text: "テスト実行時間が長く開発効率が低下",
          score: 4,
          timeImpact: "テスト実行待ちに週2-5時間",
          description: "テストスイート実行に時間がかかり開発のテンポが悪化",
        },
      ],
    },
    {
      stage: "development",
      painPoint: "デバッグ・障害対応の困難性",
      question: "バグ・障害対応で最も困難で、解決に時間がかかる課題は何ですか？",
      options: [
        {
          text: "再現条件が不明で問題の特定ができない",
          score: 1,
          timeImpact: "原因特定に1件あたり5-20時間",
          description: "特定の条件でのみ発生するバグで再現方法が分からない",
        },
        {
          text: "複数システム連携部分での問題切り分けが困難",
          score: 2,
          timeImpact: "切り分けに1件あたり3-12時間",
          description: "どのシステムに問題があるか特定するのに時間がかかる",
        },
        {
          text: "ログ情報が不十分で原因分析ができない",
          score: 3,
          timeImpact: "ログ分析に1件あたり2-8時間",
          description: "必要な情報がログに出力されておらず原因究明が困難",
        },
        {
          text: "本番環境特有の問題で開発環境では再現できない",
          score: 4,
          timeImpact: "環境差異調査に1件あたり2-6時間",
          description: "本番環境の設定・データ・負荷状況が開発環境と異なる",
        },
      ],
    },
    {
      stage: "development",
      painPoint: "CI/CD・リリース管理の困難性",
      question: "継続的インテグレーション・デプロイで最も困難で、リリース品質に影響する課題は何ですか？",
      options: [
        {
          text: "環境間での設定・データの差異管理が困難",
          score: 1,
          timeImpact: "環境差異対応に週10-20時間",
          description: "開発・テスト・本番環境で設定が異なり予期しない問題が発生",
        },
        {
          text: "ビルド・テスト失敗時の原因特定に時間がかかる",
          score: 2,
          timeImpact: "失敗調査に1件あたり2-8時間",
          description: "自動ビルド・テストが失敗した際の原因分析が困難",
        },
        {
          text: "デプロイ後の動作確認・検証が不十分",
          score: 3,
          timeImpact: "検証不足で週5-15時間の手戻り",
          description: "デプロイ後の確認が形式的で本番での問題発見が遅れる",
        },
        {
          text: "ロールバック手順が複雑で緊急時対応が困難",
          score: 4,
          timeImpact: "緊急対応に1件あたり1-4時間",
          description: "問題発生時の切り戻し作業が複雑で迅速な対応ができない",
        },
      ],
    },
    {
      stage: "development",
      painPoint: "パフォーマンス問題の特定困難",
      question: "システム性能問題で最も特定が困難で、ユーザー体験に影響する課題は何ですか？",
      options: [
        {
          text: "データ量増加に伴う性能劣化の予測が困難",
          score: 1,
          timeImpact: "性能調査に問題1つあたり10-30時間",
          description: "本番運用でデータが蓄積されると予期しない性能問題が発生",
        },
        {
          text: "複数処理の同時実行時のボトルネック特定が困難",
          score: 2,
          timeImpact: "ボトルネック分析に問題1つあたり5-20時間",
          description: "単体では問題ないが複数ユーザーの同時利用で性能が劣化",
        },
        {
          text: "メモリリーク・リソース枯渇の原因特定が困難",
          score: 3,
          timeImpact: "メモリ調査に問題1つあたり5-15時間",
          description: "長時間運用でメモリ使用量が増加し最終的にシステムが停止",
        },
        {
          text: "ネットワーク・I/O待機による性能劣化の特定が困難",
          score: 4,
          timeImpact: "I/O分析に問題1つあたり3-10時間",
          description: "外部システム連携やDB接続での待機時間が性能に影響",
        },
      ],
    },

    // Testing Stage (5 questions) - 純粋なペインポイント分析
    {
      stage: "testing",
      painPoint: "テスト設計の困難性",
      question: "テスト設計・計画で最も困難で、テスト漏れの原因となる課題は何ですか？",
      options: [
        {
          text: "複雑な業務ロジックの網羅的テストケース設計が困難",
          score: 1,
          timeImpact: "テスト設計に機能1つあたり10-30時間",
          description: "条件分岐・例外処理が多い機能で全パターンのテストケース作成が困難",
        },
        {
          text: "システム間連携の統合テストシナリオ設計が複雑",
          score: 2,
          timeImpact: "統合テスト設計に15-25時間",
          description: "複数システムが関わる処理のテストシナリオ作成が複雑",
        },
        {
          text: "非機能要件（性能・セキュリティ）のテスト設計が困難",
          score: 3,
          timeImpact: "非機能テスト設計に10-20時間",
          description: "性能・セキュリティ・可用性等の定量的テスト方法の設計が困難",
        },
        {
          text: "テスト優先順位の決定・リスクベーステストが困難",
          score: 4,
          timeImpact: "優先順位決定に5-15時間",
          description: "限られた時間で重要な部分を重点的にテストする計画立案が困難",
        },
      ],
    },
    {
      stage: "testing",
      painPoint: "テストデータ・環境の課題",
      question: "テスト実行環境・データ準備で最も困難で、テスト品質に影響する課題は何ですか？",
      options: [
        {
          text: "本番同等のテストデータ作成・個人情報マスキングが困難",
          score: 1,
          timeImpact: "データ準備に20-40時間",
          description: "本番データを使いたいが個人情報保護でマスキング作業が複雑",
        },
        {
          text: "テスト環境と本番環境の差異で問題が見つからない",
          score: 2,
          timeImpact: "環境差異対応に15-30時間",
          description: "テスト環境では問題ないが本番環境で障害が発生",
        },
        {
          text: "テストデータの整合性・関連性の維持が困難",
          score: 3,
          timeImpact: "データ整合性確保に10-20時間",
          description: "複数テーブル間のデータ関連性を保ったテストデータ作成が困難",
        },
        {
          text: "テスト実行後のデータクリーンアップ・初期化が煩雑",
          score: 4,
          timeImpact: "データ管理に週5-15時間",
          description: "テスト実行でデータが変更され次回テストに影響する",
        },
      ],
    },
    {
      stage: "testing",
      painPoint: "回帰テストの課題",
      question: "機能追加・修正後の回帰テストで最も困難で、品質リスクとなる課題は何ですか？",
      options: [
        {
          text: "変更影響範囲の特定が困難でテスト範囲を決められない",
          score: 1,
          timeImpact: "影響分析に修正1件あたり5-15時間",
          description: "コード変更がどの機能に影響するか分析するのに時間がかかる",
        },
        {
          text: "手動テストの実行時間が長くリリーススケジュールを圧迫",
          score: 2,
          timeImpact: "手動テストにリリース1回あたり30-80時間",
          description: "全機能の手動テストに膨大な時間がかかりリリースが遅延",
        },
        {
          text: "テスト自動化が不十分で人的ミスが発生",
          score: 3,
          timeImpact: "手動テストミスで週10-20時間の手戻り",
          description: "手動テストでの見落としや操作ミスで品質問題が発生",
        },
        {
          text: "テスト結果の分析・判定に時間がかかる",
          score: 4,
          timeImpact: "結果分析にリリース1回あたり5-15時間",
          description: "大量のテスト結果から問題を特定し修正要否を判断するのに時間がかかる",
        },
      ],
    },
    {
      stage: "testing",
      painPoint: "性能・負荷テストの困難性",
      question: "システム性能・負荷テストで最も困難で、本番性能予測に影響する課題は何ですか？",
      options: [
        {
          text: "実際の利用パターンを模擬した負荷シナリオ作成が困難",
          score: 1,
          timeImpact: "シナリオ設計に20-40時間",
          description: "本番での実際のユーザー行動パターンを再現するのが困難",
        },
        {
          text: "性能ボトルネックの特定・原因分析が困難",
          score: 2,
          timeImpact: "ボトルネック分析に15-30時間",
          description: "CPU・メモリ・DB・ネットワークのどこがボトルネックか特定が困難",
        },
        {
          text: "本番環境での負荷テスト実施が困難",
          score: 3,
          timeImpact: "本番テスト調整に10-25時間",
          description: "本番環境でのテストは業務影響があり実施タイミングが限定的",
        },
        {
          text: "負荷テスト結果の分析・改善提案が困難",
          score: 4,
          timeImpact: "結果分析に5-20時間",
          description: "測定データから問題箇所を特定し具体的改善策を提案するのが困難",
        },
      ],
    },
    {
      stage: "testing",
      painPoint: "ユーザー受入テストの課題",
      question: "ユーザー受入テスト（UAT）で最も困難で、ユーザー満足度に影響する課題は何ですか？",
      options: [
        {
          text: "業務ユーザーとのスケジュール調整・テスト時間確保が困難",
          score: 1,
          timeImpact: "調整に15-30時間",
          description: "多忙な業務ユーザーとのテスト日程調整が困難で十分な時間が取れない",
        },
        {
          text: "実際の業務フローに沿ったテストシナリオ作成が困難",
          score: 2,
          timeImpact: "シナリオ作成に10-25時間",
          description: "現実の業務手順を反映したテストケース作成が複雑",
        },
        {
          text: "ユーザーからのフィードバック収集・整理が困難",
          score: 3,
          timeImpact: "フィードバック整理に8-20時間",
          description: "多数のユーザーから様々な意見が出て優先順位付けが困難",
        },
        {
          text: "操作性・ユーザビリティの客観的評価が困難",
          score: 4,
          timeImpact: "ユーザビリティ評価に5-15時間",
          description: "使いやすさの評価が主観的になりがちで定量的評価が困難",
        },
      ],
    },
  ],
  en: [
    // English version with the same pure pain point analysis approach
    {
      stage: "planning",
      painPoint: "Ambiguity in Requirements Definition",
      question:
        "What is the most difficult challenge in defining requirements at the start of a project that has a significant impact on subsequent processes?",
      options: [
        {
          text: "Conflicting or opposing demands among stakeholders",
          score: 1,
          timeImpact: "2-4 weeks for adjustment",
          description:
            "There are different requirements between departments, making it difficult to form a consensus on priorities and specifications.",
        },
        {
          text: "Business requirements are vague and cannot be translated into concrete specifications",
          score: 2,
          timeImpact: "1-3 weeks for specification",
          description:
            "Abstract requirements such as 'easy to use' and 'efficient' cannot be converted into specific functions.",
        },
        {
          text: "Requirements cannot be prioritized and are all treated as important",
          score: 3,
          timeImpact: "1-2 weeks to determine priorities",
          description: "It is not possible to decide on a feasible scope within a limited budget and time frame.",
        },
        {
          text: "Frequent requirement changes and unstable specifications",
          score: 4,
          timeImpact: "5-10 hours per week to respond to changes",
          description: "Requirement changes during project execution cause rework in design and development.",
        },
      ],
    },
    {
      stage: "planning",
      painPoint: "Difficulty in estimating man-hours",
      question:
        "What element is the most difficult to predict in project man-hour estimation and causes planning errors?",
      options: [
        {
          text: "Uncertainty in the cost of learning new or inexperienced technologies",
          score: 1,
          timeImpact: "50-100% deviation from actual results",
          description: "The team's technical proficiency is unknown, resulting in an underestimation of learning time.",
        },
        {
          text: "Invisibility of the complexity of linking and integrating with existing systems",
          score: 2,
          timeImpact: "30-50% deviation from actual results",
          description:
            "The number of man-hours increases due to unknown legacy system specifications and unexpected constraints.",
        },
        {
          text: "Underestimation of man-hours for testing and bug fixes",
          score: 3,
          timeImpact: "20-30% deviation from actual results",
          description: "Focus on development man-hours and underestimate man-hours for quality assurance activities.",
        },
        {
          text: "Lack of or inaccurate past similar project data",
          score: 4,
          timeImpact: "Opportunity loss of 10-20% improvement in estimation accuracy",
          description:
            "Estimates rely on experience and intuition due to a lack of past results that can be used as a reference.",
        },
      ],
    },
    {
      stage: "planning",
      painPoint: "Difficulty in optimizing resource allocation",
      question: "What is the most difficult challenge in allocating and managing project members?",
      options: [
        {
          text: "Inability to grasp the actual skill level of members",
          score: 1,
          timeImpact: "10-20 hours of loss per week due to misallocation",
          description:
            "Practical skills cannot be determined from resumes and interviews alone, making it impossible to place the right people in the right jobs.",
        },
        {
          text: "Resource competition occurs between multiple projects.",
          score: 2,
          timeImpact: "5-10 hours per week for coordination",
          description: "Requests are concentrated on excellent members, making schedule coordination difficult.",
        },
        {
          text: "Responding to member changes or departures during the project",
          score: 3,
          timeImpact: "1-2 weeks for handover",
          description: "Sudden personnel changes require time for knowledge transfer and securing replacements.",
        },
        {
          text: "Lack of communication and coordination within the team",
          score: 4,
          timeImpact: "3-5 hours per week for information sharing",
          description: "Lack of information sharing among members results in duplicate work and miscommunication.",
        },
      ],
    },
    {
      stage: "planning",
      painPoint: "Difficulty in predicting project risks",
      question: "What is the most difficult risk to predict and respond to in project risk management?",
      options: [
        {
          text: "Uncertainty of technical feasibility",
          score: 1,
          timeImpact: "2-8 weeks delay at the time of occurrence",
          description:
            "The required specifications are found to be technically difficult to achieve, requiring significant design changes.",
        },
        {
          text: "Dependency risk on external systems and vendors",
          score: 2,
          timeImpact: "1-4 weeks delay at the time of occurrence",
          description: "Changes in external API specifications or vendor delays cause the project to stall.",
        },
        {
          text: "Human risk such as departure or illness of key personnel",
          score: 3,
          timeImpact: "1-3 weeks delay at the time of occurrence",
          description: "The absence of members with important knowledge causes work to stop.",
        },
        {
          text: "Risk of requirement changes due to changes in the business environment",
          score: 4,
          timeImpact: "1-2 weeks delay at the time of occurrence",
          description: "Market changes or changes in laws and regulations require a major review of specifications.",
        },
      ],
    },
    {
      stage: "planning",
      painPoint: "Difficulty in visualizing progress management",
      question:
        "What is the most difficult factor to grasp in project progress management that delays the discovery of delays?",
      options: [
        {
          text: "Inability to accurately grasp the actual work progress rate",
          score: 1,
          timeImpact: "1-2 weeks to discover delays",
          description:
            "Even if it is reported as '80% complete', it is actually only about 50% complete, and the last 20% takes time.",
        },
        {
          text: "Complex dependencies between tasks make it impossible to see the impact on other tasks.",
          score: 2,
          timeImpact: "5-10 hours per week for impact analysis",
          description: "It is difficult to grasp the impact of a single task delay on other tasks.",
        },
        {
          text: "Members do not report problems and keep them to themselves.",
          score: 3,
          timeImpact: "1-2 weeks to discover problems",
          description:
            "They struggle with difficult tasks without consulting, and problems are discovered just before the deadline.",
        },
        {
          text: "The granularity of progress reports is coarse and the detailed situation is unknown.",
          score: 4,
          timeImpact: "2-5 hours per week for detailed confirmation",
          description: "Weekly reports alone do not reveal daily minor problems or causes of delays.",
        },
      ],
    },

    // Analysis Stage (5 questions) - Identifying challenges in system analysis and design
    {
      stage: "analysis",
      painPoint: "Difficulty in understanding operations",
      question:
        "What element is the most difficult to understand in current operations analysis and causes system design errors?",
      options: [
        {
          text: "Many tacit operational rules and exception handling",
          score: 1,
          timeImpact: "15-30 hours per operation for investigation",
          description: "Many undocumented operational procedures and 'usual practices' exist.",
        },
        {
          text: "Operational procedures differ depending on the person in charge.",
          score: 2,
          timeImpact: "10-20 hours per operation for standardization",
          description:
            "The way of doing things differs from person to person even for the same operation, and the standard procedure is unknown.",
        },
        {
          text: "The business flow is complex and the overall picture cannot be grasped.",
          score: 3,
          timeImpact: "8-15 hours per operation for visualization",
          description: "Approval flows and information flows are complex in operations that span multiple departments.",
        },
        {
          text: "Busy field staff cannot take enough time for interviews.",
          score: 4,
          timeImpact: "5-10 hours per operation for interview coordination",
          description: "It is difficult to coordinate interviews with staff who are busy with their daily tasks.",
        },
      ],
    },
    {
      stage: "analysis",
      painPoint: "Difficulty in determining technology selection",
      question: "What is the most difficult technology choice to make in system architecture design?",
      options: [
        {
          text: "Trade-off between the risk of adopting new technologies and the limitations of existing technologies",
          score: 1,
          timeImpact: "20-40 hours for technology verification",
          description: "New technologies are attractive, but there are concerns about learning costs and stability.",
        },
        {
          text: "Balance between performance requirements and development efficiency",
          score: 2,
          timeImpact: "15-30 hours for performance design",
          description: "High performance requires complexity, which increases development and maintenance costs.",
        },
        {
          text: "Balance between security requirements and convenience",
          score: 3,
          timeImpact: "10-20 hours for security design",
          description: "Strong security impairs convenience and reduces usability.",
        },
        {
          text: "Balance between future scalability and current costs",
          score: 4,
          timeImpact: "5-15 hours for scalability consideration",
          description: "Designing for the future drives up current costs.",
        },
      ],
    },
    {
      stage: "analysis",
      painPoint: "Complexity of data design",
      question: "What element is the most difficult to design in database design and affects later operations?",
      options: [
        {
          text: "Poor quality of existing data makes migration and integration difficult.",
          score: 1,
          timeImpact: "20-40 hours for data migration design",
          description: "There is a lot of duplicate, inconsistent, and missing data, making migration work complex.",
        },
        {
          text: "The optimal solution for normalization level and performance cannot be found.",
          score: 2,
          timeImpact: "15-25 hours for DB design",
          description:
            "Maintaining data integrity degrades performance, and denormalization makes maintenance difficult.",
        },
        {
          text: "Cannot design a data structure that can accommodate future business changes.",
          score: 3,
          timeImpact: "10-20 hours for flexibility consideration",
          description: "Data structure changes due to business changes require large-scale modifications.",
        },
        {
          text: "Difficulty in ensuring data integrity between multiple systems",
          score: 4,
          timeImpact: "8-15 hours for integrity design",
          description: "Data synchronization timing and integrity rules are complex between systems.",
        },
      ],
    },
    {
      stage: "analysis",
      painPoint: "Complexity of interface design",
      question:
        "What element is the most difficult to design in system-to-system linkage design and causes problems during integration?",
      options: [
        {
          text: "Specifications of existing systems are unknown or undocumented.",
          score: 1,
          timeImpact: "15-30 hours for specification investigation",
          description:
            "The detailed specifications of legacy systems are unknown, making it impossible to determine how to link them.",
        },
        {
          text: "Data formats and item definitions are not unified.",
          score: 2,
          timeImpact: "10-20 hours for data mapping",
          description: "Data with the same meaning has different formats and names between systems.",
        },
        {
          text: "Error handling and exception handling design is complex.",
          score: 3,
          timeImpact: "8-15 hours for exception design",
          description:
            "The processing method when an error occurs in inter-system communication is diverse and complex.",
        },
        {
          text: "Difficulty in balancing performance requirements and data integrity",
          score: 4,
          timeImpact: "5-12 hours for performance design",
          description: "Real-time linkage affects performance, and batch processing has issues with integrity.",
        },
      ],
    },
    {
      stage: "analysis",
      painPoint: "UI/UX design challenges",
      question: "What is the most difficult design challenge in user interface design that affects usability?",
      options: [
        {
          text: "Responding to the diverse skill levels and usage environments of users",
          score: 1,
          timeImpact: "15-25 hours for user analysis",
          description:
            "It is difficult to design an interface that is easy to use for everyone from beginners to advanced users.",
        },
        {
          text: "Balancing business efficiency and ease of operation",
          score: 2,
          timeImpact: "10-20 hours for UI design",
          description:
            "Efficient operation for experienced users and ease of understanding for beginners are contradictory.",
        },
        {
          text: "Increased complexity of operation due to the increase in the number of screens and functions",
          score: 3,
          timeImpact: "8-15 hours for screen design",
          description:
            "The addition of functions complicates screen transitions and makes it easy for users to get lost.",
        },
        {
          text: "Complexity of responsive support and multi-device support",
          score: 4,
          timeImpact: "5-12 hours for responsive design",
          description: "It is difficult to achieve optimal display and operability on PCs, tablets, and smartphones.",
        },
      ],
    },

    // Development Stage (5 questions) - Identifying challenges in development and implementation
    {
      stage: "development",
      painPoint: "Difficulty in maintaining code quality",
      question:
        "What is the most difficult challenge in maintaining code quality in the development team that causes quality degradation?",
      options: [
        {
          text: "Large differences in skill levels and experience among members",
          score: 1,
          timeImpact: "10-20 hours per week to unify quality",
          description: "Experienced and novice people are mixed, resulting in variations in code quality.",
        },
        {
          text: "Not enough time can be secured for code reviews.",
          score: 2,
          timeImpact: "5-15 hours of rework per week due to lack of review",
          description: "Schedule pressure makes reviews perfunctory and misses quality issues.",
        },
        {
          text: "Technical debt accumulates and affects new feature development.",
          score: 3,
          timeImpact: "5-10 hours per week to deal with debt",
          description: "Past compromise implementations accumulate and make it difficult to add new features.",
        },
        {
          text: "Coding conventions and rules are not thoroughly enforced.",
          score: 4,
          timeImpact: "3-8 hours per week to unify conventions",
          description: "Coding styles are not unified within the team, resulting in reduced maintainability.",
        },
      ],
    },
    {
      stage: "development",
      painPoint: "Difficulty in creating tests",
      question:
        "What is the most difficult challenge in creating unit tests and integration tests that affects test quality?",
      options: [
        {
          text: "Difficult to design test cases for complex business logic",
          score: 1,
          timeImpact: "5-15 hours per function for test design",
          description:
            "It is difficult to create comprehensive test cases for business logic with many conditional branches.",
        },
        {
          text: "Testing of external system linkage parts is difficult.",
          score: 2,
          timeImpact: "3-8 hours per dependency for mock creation",
          description: "Testing of linkage parts with external APIs, DBs, and file systems is complex.",
        },
        {
          text: "Preparation and management of test data is complicated.",
          score: 3,
          timeImpact: "3-8 hours per week for data preparation",
          description: "It takes time to create and manage test data for various patterns.",
        },
        {
          text: "Long test execution time reduces development efficiency.",
          score: 4,
          timeImpact: "2-5 hours per week waiting for test execution",
          description: "The time it takes to execute the test suite slows down the pace of development.",
        },
      ],
    },
    {
      stage: "development",
      painPoint: "Difficulty in debugging and troubleshooting",
      question: "What is the most difficult challenge in dealing with bugs and failures that takes time to resolve?",
      options: [
        {
          text: "The reproduction conditions are unknown and the problem cannot be identified.",
          score: 1,
          timeImpact: "5-20 hours per case to identify the cause",
          description: "The reproduction method is unknown for bugs that occur only under specific conditions.",
        },
        {
          text: "Difficult to isolate problems in parts linked to multiple systems",
          score: 2,
          timeImpact: "3-12 hours per case for isolation",
          description: "It takes time to identify which system has the problem.",
        },
        {
          text: "Insufficient log information makes it impossible to analyze the cause.",
          score: 3,
          timeImpact: "2-8 hours per case for log analysis",
          description: "The necessary information is not output to the log, making it difficult to find the cause.",
        },
        {
          text: "Problems specific to the production environment cannot be reproduced in the development environment.",
          score: 4,
          timeImpact: "2-6 hours per case for investigating environmental differences",
          description:
            "The settings, data, and load conditions of the production environment differ from those of the development environment.",
        },
      ],
    },
    {
      stage: "development",
      painPoint: "Difficulty in CI/CD and release management",
      question:
        "What is the most difficult challenge in continuous integration and deployment that affects release quality?",
      options: [
        {
          text: "Difficult to manage differences in settings and data between environments",
          score: 1,
          timeImpact: "10-20 hours per week to deal with environmental differences",
          description:
            "Settings differ between development, test, and production environments, causing unexpected problems.",
        },
        {
          text: "It takes time to identify the cause of build and test failures.",
          score: 2,
          timeImpact: "2-8 hours per case for failure investigation",
          description: "It is difficult to analyze the cause when automatic builds and tests fail.",
        },
        {
          text: "Insufficient operation confirmation and verification after deployment",
          score: 3,
          timeImpact: "5-15 hours of rework per week due to lack of verification",
          description: "Confirmation after deployment is perfunctory, and problems in production are discovered late.",
        },
        {
          text: "Rollback procedures are complex and difficult to handle in emergencies.",
          score: 4,
          timeImpact: "1-4 hours per case for emergency response",
          description:
            "The work of switching back when a problem occurs is complex and quick response is not possible.",
        },
      ],
    },
    {
      stage: "development",
      painPoint: "Difficulty in identifying performance problems",
      question:
        "What is the most difficult challenge to identify in system performance problems that affects the user experience?",
      options: [
        {
          text: "Difficult to predict performance degradation due to increased data volume",
          score: 1,
          timeImpact: "10-30 hours per problem for performance investigation",
          description: "Unexpected performance problems occur when data accumulates in production operations.",
        },
        {
          text: "Difficult to identify bottlenecks when multiple processes are executed simultaneously",
          score: 2,
          timeImpact: "5-20 hours per problem for bottleneck analysis",
          description:
            "There is no problem when used alone, but performance degrades when multiple users use it simultaneously.",
        },
        {
          text: "Difficult to identify the cause of memory leaks and resource depletion",
          score: 3,
          timeImpact: "5-15 hours per problem for memory investigation",
          description: "Memory usage increases during long-term operation and eventually the system stops.",
        },
        {
          text: "Difficult to identify performance degradation due to network and I/O wait",
          score: 4,
          timeImpact: "3-10 hours per problem for I/O analysis",
          description: "Wait time in external system linkage and DB connection affects performance.",
        },
      ],
    },

    // Testing Stage (5 questions) - Identifying challenges in testing and quality assurance
    {
      stage: "testing",
      painPoint: "Difficulty in test design",
      question: "What is the most difficult challenge in test design and planning that causes test omissions?",
      options: [
        {
          text: "Difficult to design comprehensive test cases for complex business logic",
          score: 1,
          timeImpact: "10-30 hours per function for test design",
          description:
            "It is difficult to create test cases for all patterns for functions with many conditional branches and exception handling.",
        },
        {
          text: "Complex integration test scenario design for system-to-system linkage",
          score: 2,
          timeImpact: "15-25 hours for integration test design",
          description: "It is complex to create test scenarios for processes involving multiple systems.",
        },
        {
          text: "Difficult to design tests for non-functional requirements (performance, security)",
          score: 3,
          timeImpact: "10-20 hours for non-functional test design",
          description:
            "It is difficult to design quantitative test methods for performance, security, availability, etc.",
        },
        {
          text: "Difficult to determine test priorities and risk-based testing",
          score: 4,
          timeImpact: "5-15 hours for priority determination",
          description: "It is difficult to plan to focus on important parts in a limited time.",
        },
      ],
    },
    {
      stage: "testing",
      painPoint: "Test data and environment issues",
      question:
        "What is the most difficult challenge in test execution environment and data preparation that affects test quality?",
      options: [
        {
          text: "Difficult to create test data equivalent to production and mask personal information",
          score: 1,
          timeImpact: "20-40 hours for data preparation",
          description:
            "I want to use production data, but the masking work is complex due to personal information protection.",
        },
        {
          text: "Problems cannot be found due to differences between the test environment and the production environment.",
          score: 2,
          timeImpact: "15-30 hours to deal with environmental differences",
          description:
            "There is no problem in the test environment, but a failure occurs in the production environment.",
        },
        {
          text: "Difficult to maintain the integrity and relevance of test data",
          score: 3,
          timeImpact: "10-20 hours to ensure data integrity",
          description: "It is difficult to create test data that maintains data relationships between multiple tables.",
        },
        {
          text: "Data cleanup and initialization after test execution is complicated.",
          score: 4,
          timeImpact: "5-15 hours per week for data management",
          description: "Data is changed by test execution and affects the next test.",
        },
      ],
    },
    {
      stage: "testing",
      painPoint: "Regression testing issues",
      question:
        "What is the most difficult challenge in regression testing after feature additions and modifications that poses a quality risk?",
      options: [
        {
          text: "Difficult to identify the scope of change impact and cannot determine the test scope",
          score: 1,
          timeImpact: "5-15 hours per modification for impact analysis",
          description: "It takes time to analyze which functions are affected by the code change.",
        },
        {
          text: "Long manual test execution time puts pressure on the release schedule.",
          score: 2,
          timeImpact: "30-80 hours per release for manual testing",
          description: "It takes a huge amount of time to manually test all functions, delaying the release.",
        },
        {
          text: "Insufficient test automation causes human errors.",
          score: 3,
          timeImpact: "10-20 hours of rework per week due to manual test errors",
          description: "Quality problems occur due to oversights and operational errors in manual testing.",
        },
        {
          text: "It takes time to analyze and judge test results.",
          score: 4,
          timeImpact: "5-15 hours per release for result analysis",
          description:
            "It takes time to identify problems and determine whether to fix them from a large amount of test results.",
        },
      ],
    },
    {
      stage: "testing",
      painPoint: "Performance and load testing issues",
      question:
        "What is the most difficult challenge in system performance and load testing that affects production performance prediction?",
      options: [
        {
          text: "Difficult to create load scenarios that simulate actual usage patterns",
          score: 1,
          timeImpact: "20-40 hours for scenario design",
          description: "It is difficult to reproduce the actual user behavior patterns in production.",
        },
        {
          text: "Difficult to identify performance bottlenecks and analyze causes",
          score: 2,
          timeImpact: "15-30 hours for bottleneck analysis",
          description: "It is difficult to identify where the bottleneck is in CPU, memory, DB, and network.",
        },
        {
          text: "Difficult to conduct load tests in the production environment",
          score: 3,
          timeImpact: "10-25 hours for production test coordination",
          description:
            "Testing in the production environment has an impact on operations, and the timing of implementation is limited.",
        },
        {
          text: "Difficult to analyze and propose improvements to load test results",
          score: 4,
          timeImpact: "5-20 hours for result analysis",
          description:
            "It is difficult to identify problem areas from measurement data and propose specific improvements.",
        },
      ],
    },
    {
      stage: "testing",
      painPoint: "User acceptance testing issues",
      question: "What is the most difficult challenge in user acceptance testing (UAT) that affects user satisfaction?",
      options: [
        {
          text: "Difficult to coordinate schedules and secure test time with business users",
          score: 1,
          timeImpact: "15-30 hours for coordination",
          description:
            "It is difficult to coordinate test schedules with busy business users and not enough time can be secured.",
        },
        {
          text: "Difficult to create test scenarios that follow actual business flows",
          score: 2,
          timeImpact: "10-25 hours for scenario creation",
          description: "It is complex to create test cases that reflect realistic business procedures.",
        },
        {
          text: "Difficult to collect and organize feedback from users",
          score: 3,
          timeImpact: "8-20 hours for feedback organization",
          description: "Many opinions come from many users, making it difficult to prioritize.",
        },
        {
          text: "Difficult to objectively evaluate operability and usability",
          score: 4,
          timeImpact: "5-15 hours for usability evaluation",
          description:
            "The evaluation of ease of use tends to be subjective, making quantitative evaluation difficult.",
        },
      ],
    },
  ],
}
