import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Crown, Shield, Sword, Flag } from 'lucide-react';

const recipes = [
  {
    id: 'royal-crown',
    name: '王冠',
    description: '黄金とダイヤモンドで作る国王の象徴',
    icon: Crown,
    category: '装飾品',
    difficulty: 'legendary',
    ingredients: [
      { name: '金インゴット', amount: 5 },
      { name: 'ダイヤモンド', amount: 3 },
      { name: 'エメラルド', amount: 1 },
    ],
    pattern: [
      ['金', 'ダ', '金'],
      ['金', 'エ', '金'],
      ['', '', '']
    ],
    result: { name: '王冠', amount: 1 },
    unlockCondition: '国家を建設する',
  },
  {
    id: 'border-stone',
    name: '国境石',
    description: '領土の境界を明確に示すマーカー',
    icon: Shield,
    category: '建設材料',
    difficulty: 'uncommon',
    ingredients: [
      { name: '石', amount: 4 },
      { name: '鉄インゴット', amount: 2 },
      { name: 'レッドストーンダスト', amount: 1 },
    ],
    pattern: [
      ['石', '鉄', '石'],
      ['鉄', 'レ', '鉄'],
      ['石', '鉄', '石']
    ],
    result: { name: '国境石', amount: 4 },
    unlockCondition: '国境設定権限を取得する',
  },
  {
    id: 'war-banner',
    name: '戦旗',
    description: '戦争状態を示す威圧的な旗',
    icon: Flag,
    category: '旗・横断幕',
    difficulty: 'rare',
    ingredients: [
      { name: '赤色の羊毛', amount: 6 },
      { name: '棒', amount: 1 },
      { name: '火薬', amount: 2 },
    ],
    pattern: [
      ['羊', '羊', '羊'],
      ['羊', '棒', '羊'],
      ['火', '羊', '火']
    ],
    result: { name: '戦旗', amount: 1 },
    unlockCondition: '戦争宣言権限を取得する',
  },
  {
    id: 'diplomacy-scroll',
    name: '外交文書',
    description: '正式な外交交渉に使用する公文書',
    icon: BookOpen,
    category: '外交道具',
    difficulty: 'rare',
    ingredients: [
      { name: '紙', amount: 3 },
      { name: '金インゴット', amount: 1 },
      { name: 'インクと羽根ペン', amount: 1 },
    ],
    pattern: [
      ['紙', '金', '紙'],
      ['紙', 'ペ', '紙'],
      ['', '紙', '']
    ],
    result: { name: '外交文書', amount: 1 },
    unlockCondition: '外交権限を取得する',
  },
];

const difficultyColors = {
  common: 'bg-stone-500',
  uncommon: 'bg-green-500',
  rare: 'bg-blue-500',
  legendary: 'bg-amber-500',
};

const difficultyLabels = {
  common: 'コモン',
  uncommon: 'アンコモン',
  rare: 'レア',
  legendary: 'レジェンダリー',
};

const itemSymbols: { [key: string]: string } = {
  '金': '🟨',
  'ダ': '💎',
  'エ': '🟢',
  '石': '⬜',
  '鉄': '⬛',
  'レ': '🔴',
  '羊': '🟥',
  '棒': '🟫',
  '火': '💥',
  '紙': '📄',
  'ペ': '🖋️',
  '': '　',
};

export default function RecipesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-stone-900 mb-4">レシピ一覧</h1>
        <p className="text-stone-600">MakeCountryアドオンで追加される専用レシピです</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {recipes.map((recipe) => {
          const Icon = recipe.icon;
          return (
            <Card key={recipe.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center text-xl">
                    <Icon className="h-6 w-6 text-emerald-600 mr-2" />
                    {recipe.name}
                  </CardTitle>
                  <Badge className={difficultyColors[recipe.difficulty as keyof typeof difficultyColors]}>
                    {difficultyLabels[recipe.difficulty as keyof typeof difficultyLabels]}
                  </Badge>
                </div>
                <CardDescription>{recipe.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {/* Recipe Pattern */}
                  <div>
                    <h4 className="text-sm font-medium text-stone-700 mb-3">クラフトパターン:</h4>
                    <div className="bg-stone-100 p-4 rounded-lg">
                      <div className="grid grid-cols-3 gap-1 w-fit mx-auto">
                        {recipe.pattern.flat().map((item, index) => (
                          <div 
                            key={index}
                            className="w-8 h-8 bg-white border border-stone-300 rounded flex items-center justify-center text-lg"
                          >
                            {itemSymbols[item] || ''}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Ingredients */}
                  <div>
                    <h4 className="text-sm font-medium text-stone-700 mb-2">必要素材:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {recipe.ingredients.map((ingredient, index) => (
                        <div key={index} className="flex justify-between items-center bg-stone-50 px-3 py-2 rounded">
                          <span className="text-sm">{ingredient.name}</span>
                          <Badge variant="outline" className="text-xs">
                            ×{ingredient.amount}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Result */}
                  <div>
                    <h4 className="text-sm font-medium text-stone-700 mb-2">完成品:</h4>
                    <div className="flex justify-between items-center bg-emerald-50 px-3 py-2 rounded border border-emerald-200">
                      <span className="text-sm font-medium">{recipe.result.name}</span>
                      <Badge className="bg-emerald-600">
                        ×{recipe.result.amount}
                      </Badge>
                    </div>
                  </div>

                  {/* Unlock Condition */}
                  <div>
                    <h4 className="text-sm font-medium text-stone-700 mb-2">解放条件:</h4>
                    <p className="text-sm text-stone-600 bg-amber-50 px-3 py-2 rounded border border-amber-200">
                      {recipe.unlockCondition}
                    </p>
                  </div>

                  <Badge variant="outline" className="w-fit">
                    {recipe.category}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Legend */}
      <Card className="mt-8">
        <CardHeader>
          <CardTitle>記号の説明</CardTitle>
          <CardDescription>クラフトパターンで使用されている記号の意味</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Object.entries({
              '金': '金インゴット',
              'ダ': 'ダイヤモンド',
              'エ': 'エメラルド',
              '石': '石',
              '鉄': '鉄インゴット',
              'レ': 'レッドストーンダスト',
              '羊': '赤色の羊毛',
              '棒': '棒',
              '火': '火薬',
              '紙': '紙',
              'ペ': 'インクと羽根ペン',
            }).map(([symbol, name]) => (
              <div key={symbol} className="flex items-center space-x-2">
                <span className="text-lg">{itemSymbols[symbol]}</span>
                <span className="text-sm">{name}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}