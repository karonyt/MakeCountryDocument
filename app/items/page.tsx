'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search, Crown, Shield, Sword, Gem, Package } from 'lucide-react';

const items = [
  {
    id: 'royal-crown',
    name: '王冠',
    description: '国王の象徴となる黄金の王冠',
    category: '装飾品',
    rarity: 'legendary',
    icon: Crown,
    obtainMethod: '国家建設時に自動取得',
    effects: ['国王権限の行使', '威厳+5', '領土内での移動速度上昇'],
    durability: '無限',
  },
  {
    id: 'border-stone',
    name: '国境石',
    description: '領土の境界を示すマーカー',
    category: '建設材料',
    rarity: 'uncommon',
    icon: Shield,
    obtainMethod: '/item give @s makecountry:border_stone',
    effects: ['国境の視覚化', '侵入者警告'],
    durability: '設置後永続',
  },
  {
    id: 'citizen-badge',
    name: '国民証',
    description: '国民であることを証明するバッジ',
    category: '装飾品',
    rarity: 'common',
    icon: Gem,
    obtainMethod: '国民として招待された時に取得',
    effects: ['国民権限の行使', '領土内での建築許可'],
    durability: '無限',
  },
  {
    id: 'war-banner',
    name: '戦旗',
    description: '戦争状態を示す赤い旗',
    category: '旗・横断幕',
    rarity: 'rare',
    icon: Sword,
    obtainMethod: '戦争宣言時に自動生成',
    effects: ['戦争状態の表示', '士気向上'],
    durability: '戦争終了まで',
  },
];

const categories = ['すべて', '装飾品', '建設材料', '旗・横断幕', '機能アイテム'];
const rarities = ['すべて', 'common', 'uncommon', 'rare', 'legendary'];

const rarityColors = {
  common: 'bg-stone-500',
  uncommon: 'bg-green-500',
  rare: 'bg-blue-500',
  legendary: 'bg-amber-500',
};

const rarityLabels = {
  common: 'コモン',
  uncommon: 'アンコモン',
  rare: 'レア',
  legendary: 'レジェンダリー',
};

export default function ItemsPage() {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('すべて');
  const [selectedRarity, setSelectedRarity] = useState('すべて');

  const filteredItems = items.filter(item => {
    const matchesSearch = item.name.includes(search) || item.description.includes(search);
    const matchesCategory = selectedCategory === 'すべて' || item.category === selectedCategory;
    const matchesRarity = selectedRarity === 'すべて' || item.rarity === selectedRarity;
    return matchesSearch && matchesCategory && matchesRarity;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-stone-900 mb-4">アイテム一覧</h1>
        <p className="text-stone-600">MakeCountryアドオンで追加される専用アイテムです</p>
      </div>

      {/* Search and Filter */}
      <div className="mb-8 space-y-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-stone-400 h-4 w-4" />
          <Input
            placeholder="アイテムを検索..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10"
          />
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex flex-wrap gap-2">
            <span className="text-sm font-medium text-stone-700 py-1">カテゴリ:</span>
            {categories.map((category) => (
              <Badge
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                className={`cursor-pointer transition-colors ${
                  selectedCategory === category 
                    ? 'bg-emerald-700 hover:bg-emerald-800' 
                    : 'hover:bg-stone-100'
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Badge>
            ))}
          </div>
          
          <div className="flex flex-wrap gap-2">
            <span className="text-sm font-medium text-stone-700 py-1">レア度:</span>
            {rarities.map((rarity) => (
              <Badge
                key={rarity}
                variant={selectedRarity === rarity ? "default" : "outline"}
                className={`cursor-pointer transition-colors ${
                  selectedRarity === rarity 
                    ? 'bg-emerald-700 hover:bg-emerald-800' 
                    : 'hover:bg-stone-100'
                }`}
                onClick={() => setSelectedRarity(rarity)}
              >
                {rarity === 'すべて' ? 'すべて' : rarityLabels[rarity as keyof typeof rarityLabels]}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      {/* Items Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => {
          const Icon = item.icon;
          return (
            <Card key={item.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center text-lg">
                    <Icon className="h-6 w-6 text-emerald-600 mr-2" />
                    {item.name}
                  </CardTitle>
                  <div className={`w-3 h-3 rounded-full ${rarityColors[item.rarity as keyof typeof rarityColors]}`}></div>
                </div>
                <CardDescription>{item.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <Badge variant="outline">{item.category}</Badge>
                    <Badge className={rarityColors[item.rarity as keyof typeof rarityColors]}>
                      {rarityLabels[item.rarity as keyof typeof rarityLabels]}
                    </Badge>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium text-stone-700 mb-1">入手方法:</h4>
                    <p className="text-xs text-stone-600">{item.obtainMethod}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium text-stone-700 mb-1">効果:</h4>
                    <ul className="text-xs text-stone-600 space-y-1">
                      {item.effects.map((effect, index) => (
                        <li key={index}>• {effect}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium text-stone-700 mb-1">耐久度:</h4>
                    <p className="text-xs text-stone-600">{item.durability}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {filteredItems.length === 0 && (
        <div className="text-center py-12">
          <Package className="h-12 w-12 text-stone-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-stone-900 mb-2">アイテムが見つかりません</h3>
          <p className="text-stone-600">検索条件を変更してお試しください</p>
        </div>
      )}
    </div>
  );
}