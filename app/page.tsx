import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Download, Github, MessageCircle, Crown, Shield, Users, Map } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center mb-4">
          <Crown className="h-8 w-8 text-amber-600 mr-2" />
          <h1 className="text-4xl font-bold text-stone-900">MakeCountry</h1>
        </div>
        <p className="text-xl text-stone-600 mb-6 max-w-2xl mx-auto">
          Minecraft Bedrock Editionで国家を建設し、領土を管理できる本格的なアドオンです
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Badge variant="secondary" className="text-sm">v1.2.0</Badge>
          <Badge variant="outline" className="text-sm">Minecraft BE 1.20.50+</Badge>
          <Badge variant="outline" className="text-sm">日本語対応</Badge>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
        <Button asChild size="lg" className="h-auto p-6 bg-emerald-700 hover:bg-emerald-800">
          <Link href="/links" className="flex flex-col items-center">
            <Download className="h-6 w-6 mb-2" />
            <span className="font-semibold">ダウンロード</span>
            <span className="text-sm opacity-90">最新版を入手</span>
          </Link>
        </Button>
        <Button asChild variant="outline" size="lg" className="h-auto p-6">
          <Link href="/commands" className="flex flex-col items-center">
            <Map className="h-6 w-6 mb-2" />
            <span className="font-semibold">コマンド一覧</span>
            <span className="text-sm opacity-70">使い方を確認</span>
          </Link>
        </Button>
        <Button asChild variant="outline" size="lg" className="h-auto p-6">
          <Link href="/systems" className="flex flex-col items-center">
            <Shield className="h-6 w-6 mb-2" />
            <span className="font-semibold">機能紹介</span>
            <span className="text-sm opacity-70">システムを理解</span>
          </Link>
        </Button>
      </div>

      {/* Features */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Crown className="h-5 w-5 text-amber-600 mr-2" />
              国家建設
            </CardTitle>
            <CardDescription>
              自分だけの国家を建設し、領土を拡大していきましょう
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="text-sm text-stone-600 space-y-1">
              <li>• 国境の設定と管理</li>
              <li>• 首都の指定</li>
              <li>• 国旗の設定</li>
              <li>• 国民の管理</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Shield className="h-5 w-5 text-blue-600 mr-2" />
              領土保護
            </CardTitle>
            <CardDescription>
              国境内でのブロック破壊・設置を制限できます
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="text-sm text-stone-600 space-y-1">
              <li>• 国民以外の建築禁止</li>
              <li>• 侵入者の検知</li>
              <li>• 保護レベルの調整</li>
              <li>• 例外エリアの設定</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Users className="h-5 w-5 text-green-600 mr-2" />
              外交システム
            </CardTitle>
            <CardDescription>
              他国との同盟や戦争状態を管理できます
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="text-sm text-stone-600 space-y-1">
              <li>• 同盟の締結</li>
              <li>• 戦争の宣言</li>
              <li>• 中立状態の維持</li>
              <li>• 外交ボーナス</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Installation Guide */}
      <Card className="mb-12">
        <CardHeader>
          <CardTitle>導入方法</CardTitle>
          <CardDescription>
            MakeCountryアドオンをMinecraft Bedrock Editionに導入する手順
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold mb-3 text-emerald-700">ビヘイビアパック形式</h3>
              <ol className="space-y-2 text-sm text-stone-600">
                <li>1. ダウンロードページから .mcpack ファイルを取得</li>
                <li>2. ファイルをタップしてMinecraftで開く</li>
                <li>3. ワールド作成時にアドオンを有効化</li>
                <li>4. 実験的なゲームプレイを「オン」に設定</li>
              </ol>
            </div>
            <div>
              <h3 className="font-semibold mb-3 text-emerald-700">ワールドテンプレート</h3>
              <ol className="space-y-2 text-sm text-stone-600">
                <li>1. サンプルワールドをダウンロード</li>
                <li>2. .mcworld ファイルをインポート</li>
                <li>3. すぐに国家建設を開始できます</li>
                <li>4. チュートリアルが含まれています</li>
              </ol>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Version Info */}
      <Card>
        <CardHeader>
          <CardTitle>対応バージョン</CardTitle>
          <CardDescription>
            動作確認済みのMinecraft Bedrock Editionバージョン
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-green-700 mb-2">✅ 対応バージョン</h4>
              <ul className="text-sm text-stone-600 space-y-1">
                <li>• 1.20.50 ～ 1.20.81</li>
                <li>• 1.21.0 ～ 最新版</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-red-700 mb-2">❌ 非対応バージョン</h4>
              <ul className="text-sm text-stone-600 space-y-1">
                <li>• 1.19.x 以前</li>
                <li>• 1.20.0 ～ 1.20.49</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}