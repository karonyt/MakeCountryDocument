import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Crown, Shield, Users, Sword, Map, Heart, AlertTriangle, Settings } from 'lucide-react';
import Link from 'next/link';

const systems = [
  {
    id: 'country-management',
    name: '国家管理システム',
    description: '国家の設立から運営まで、すべての基本機能を提供',
    icon: Crown,
    color: 'text-amber-600',
    features: [
      '国家の設立と削除',
      '国名と国旗の設定',
      '首都の指定',
      '国家情報の表示',
      '国家統計の確認'
    ],
    details: '国家管理システムでは、プレイヤーが独自の国家を設立し、その国家の基本情報を管理できます。国名は3-20文字で設定でき、国旗は16色のバナーパターンから選択可能です。'
  },
  {
    id: 'territory-protection',
    name: '領土保護システム',
    description: '国境内の建築物とアイテムを保護する高度なシステム',
    icon: Shield,
    color: 'text-blue-600',
    features: [
      'ブロック破壊・設置の制限',
      'チェスト等の保護',
      '侵入者の検知と警告',
      '保護レベルの調整',
      '例外エリアの設定'
    ],
    details: '領土保護システムは、国民以外のプレイヤーによる国境内での建築活動を制限します。保護レベルは0-5で設定でき、レベルが高いほど厳格な保護が適用されます。'
  },
  {
    id: 'citizen-management',
    name: '国民管理システム',
    description: '国民の招待、権限管理、組織運営を効率化',
    icon: Users,
    color: 'text-green-600',
    features: [
      '国民の招待と除名',
      '役職と権限の設定',
      '国民リストの管理',
      'オンライン状況の確認',
      '貢献度の記録'
    ],
    details: '国民管理システムでは、国王が他のプレイヤーを国民として招待し、役職を割り当てることができます。役職には市長、将軍、大臣などがあり、それぞれ異なる権限を持ちます。'
  },
  {
    id: 'diplomacy-system',
    name: '外交システム',
    description: '他国との関係を管理し、複雑な国際情勢を演出',
    icon: Sword,
    color: 'text-red-600',
    features: [
      '同盟の締結と破棄',
      '戦争の宣言と終戦',
      '中立状態の維持',
      '外交文書の作成',
      '国際条約の締結'
    ],
    details: '外交システムでは、国家間の関係を「同盟」「中立」「敵対」の3つの状態で管理します。同盟国同士は相互の領土で建築が可能になり、敵対国との間では特別なPvPルールが適用されます。'
  },
  {
    id: 'border-system',
    name: '国境管理システム',
    description: '領土の境界を正確に設定し、視覚的に表示',
    icon: Map,
    color: 'text-purple-600',
    features: [
      '座標による国境設定',
      '国境線の視覚化',
      '領土の拡張と縮小',
      '隣接国との境界調整',
      'マップ上での表示'
    ],
    details: '国境管理システムでは、座標を指定して国家の領土を定義します。設定した国境は特殊なパーティクルエフェクトで表示され、国境石を設置することで永続的にマークできます。'
  },
  {
    id: 'economy-system',
    name: '経済システム',
    description: '国家予算と税収を管理し、経済発展を促進',
    icon: Heart,
    color: 'text-emerald-600',
    features: [
      '国家予算の管理',
      '税収システム',
      '公共事業の実施',
      '貿易協定の締結',
      '経済統計の確認'
    ],
    details: '経済システムでは、国民からの税収を原資として国家予算を管理します。予算は国境の拡張、公共施設の建設、軍事力の強化などに使用できます。'
  }
];

export default function SystemsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-stone-900 mb-4">国家システム</h1>
        <p className="text-stone-600">MakeCountryアドオンの各種システムの詳細説明</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {systems.map((system) => {
          const Icon = system.icon;
          return (
            <Card key={system.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Icon className={`h-6 w-6 ${system.color} mr-3`} />
                  {system.name}
                </CardTitle>
                <CardDescription className="text-base">
                  {system.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium text-stone-700 mb-3">主要機能:</h4>
                    <ul className="space-y-2">
                      {system.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-stone-600">
                          <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="pt-4 border-t border-stone-200">
                    <p className="text-sm text-stone-600 leading-relaxed">
                      {system.details}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* システム連携の説明 */}
      <Card className="mt-12">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Settings className="h-5 w-5 mr-2" />
            システム間の連携
          </CardTitle>
          <CardDescription>
            各システムがどのように連携して動作するかの説明
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-stone-700 mb-3">🏛️ 国家運営フロー</h4>
              <ol className="space-y-2 text-sm text-stone-600">
                <li>1. 国家管理システムで国家を設立</li>
                <li>2. 国境管理システムで領土を確定</li>
                <li>3. 領土保護システムで領土を守る</li>
                <li>4. 国民管理システムで組織を構築</li>
                <li>5. 経済システムで国力を向上</li>
              </ol>
            </div>
            <div>
              <h4 className="font-medium text-stone-700 mb-3">🤝 外交活動フロー</h4>
              <ol className="space-y-2 text-sm text-stone-600">
                <li>1. 外交システムで他国との関係を構築</li>
                <li>2. 経済システムで貿易協定を締結</li>
                <li>3. 国境管理システムで境界を調整</li>
                <li>4. 必要に応じて軍事同盟を締結</li>
                <li>5. 平和的な共存関係を維持</li>
              </ol>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 注意事項 */}
      <Card className="mt-8">
        <CardHeader>
          <CardTitle className="flex items-center text-amber-700">
            <AlertTriangle className="h-5 w-5 mr-2" />
            重要な注意事項
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-sm text-stone-600">
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-amber-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              すべてのシステムを使用するには「実験的なゲームプレイ」を有効にする必要があります
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-amber-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              サーバーでの使用時は、管理者権限の設定に注意してください
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-amber-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              大規模な領土設定はゲームパフォーマンスに影響する可能性があります
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-amber-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              定期的なワールドバックアップを推奨します
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}