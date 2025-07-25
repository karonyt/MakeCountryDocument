'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search, Terminal, Crown, Users, Map, Shield } from 'lucide-react';
import Link from 'next/link';

const commands = [
  {
    id: 'create-country',
    name: '/country create',
    description: '新しい国家を建設する',
    usage: '/country create <国名>',
    category: '国家管理',
    icon: Crown,
    permission: 'player',
  },
  {
    id: 'set-border',
    name: '/border set',
    description: '国境を設定する',
    usage: '/border set <x1> <z1> <x2> <z2>',
    category: '領土管理',
    icon: Map,
    permission: 'admin',
  },
  {
    id: 'invite-citizen',
    name: '/citizen invite',
    description: 'プレイヤーを国民として招待する',
    usage: '/citizen invite <プレイヤー名>',
    category: '国民管理',
    icon: Users,
    permission: 'admin',
  },
  {
    id: 'set-protection',
    name: '/protect set',
    description: '領土の保護レベルを設定する',
    usage: '/protect set <レベル>',
    category: '保護システム',
    icon: Shield,
    permission: 'admin',
  },
  {
    id: 'country-info',
    name: '/country info',
    description: '国家の詳細情報を表示する',
    usage: '/country info [国名]',
    category: '情報確認',
    icon: Terminal,
    permission: 'player',
  },
  {
    id: 'declare-war',
    name: '/diplomacy war',
    description: '他国に宣戦布告する',
    usage: '/diplomacy war <国名>',
    category: '外交システム',
    icon: Shield,
    permission: 'admin',
  },
];

const categories = ['すべて', '国家管理', '領土管理', '国民管理', '保護システム', '情報確認', '外交システム'];

export default function CommandsPage() {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('すべて');

  const filteredCommands = commands.filter(command => {
    const matchesSearch = command.name.toLowerCase().includes(search.toLowerCase()) ||
                         command.description.includes(search);
    const matchesCategory = selectedCategory === 'すべて' || command.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-stone-900 mb-4">コマンド一覧</h1>
        <p className="text-stone-600">MakeCountryアドオンで使用できるすべてのコマンドです</p>
      </div>

      {/* Search and Filter */}
      <div className="mb-8 space-y-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-stone-400 h-4 w-4" />
          <Input
            placeholder="コマンドを検索..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10"
          />
        </div>
        
        <div className="flex flex-wrap gap-2">
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
      </div>

      {/* Commands Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCommands.map((command) => {
          const Icon = command.icon;
          return (
            <Link key={command.id} href={`/commands/${command.id}`}>
              <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    <Icon className="h-5 w-5 text-emerald-600 mr-2" />
                    <code className="text-base font-mono">{command.name}</code>
                  </CardTitle>
                  <CardDescription>{command.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <h4 className="text-sm font-medium text-stone-700 mb-1">使用法:</h4>
                      <code className="text-xs bg-stone-100 px-2 py-1 rounded text-stone-800">
                        {command.usage}
                      </code>
                    </div>
                    <div className="flex justify-between items-center">
                      <Badge variant="outline" className="text-xs">
                        {command.category}
                      </Badge>
                      <Badge 
                        variant={command.permission === 'admin' ? 'destructive' : 'secondary'}
                        className="text-xs"
                      >
                        {command.permission === 'admin' ? '管理者' : '一般'}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>

      {filteredCommands.length === 0 && (
        <div className="text-center py-12">
          <Terminal className="h-12 w-12 text-stone-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-stone-900 mb-2">コマンドが見つかりません</h3>
          <p className="text-stone-600">検索条件を変更してお試しください</p>
        </div>
      )}
    </div>
  );
}