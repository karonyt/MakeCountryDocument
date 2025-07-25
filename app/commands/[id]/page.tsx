import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Terminal, AlertTriangle, Info, CheckCircle } from 'lucide-react';
import Link from 'next/link';

// コマンドの詳細データ（実際のプロジェクトでは外部ファイルから読み込み）
const commandDetails = {
  'create-country': {
    name: '/country create',
    description: '新しい国家を建設する',
    usage: '/country create <国名>',
    category: '国家管理',
    permission: 'player',
    examples: [
      {
        command: '/country create Japan',
        description: '「Japan」という名前の国家を作成'
      },
      {
        command: '/country create "New Republic"',
        description: 'スペースを含む国名は引用符で囲む'
      }
    ],
    parameters: [
      {
        name: '国名',
        type: 'string',
        required: true,
        description: '作成する国家の名前（3-20文字）'
      }
    ],
    notes: [
      '国名は3文字以上20文字以下で設定してください',
      '既に存在する国名は使用できません',
      '国家作成後は自動的に国王になります',
      '1人のプレイヤーは1つの国家のみ作成可能です'
    ],
    relatedCommands: ['country-info', 'set-border', 'invite-citizen']
  },
  'set-border': {
    name: '/border set',
    description: '国境を設定する',
    usage: '/border set <x1> <z1> <x2> <z2>',
    category: '領土管理',
    permission: 'admin',
    examples: [
      {
        command: '/border set 100 100 200 200',
        description: '座標(100,100)から(200,200)までを国境に設定'
      },
      {
        command: '/border set ~ ~ ~100 ~100',
        description: '現在位置から100ブロック四方を国境に設定'
      }
    ],
    parameters: [
      {
        name: 'x1, z1',
        type: 'coordinate',
        required: true,
        description: '国境の開始座標（北西角）'
      },
      {
        name: 'x2, z2',
        type: 'coordinate', 
        required: true,
        description: '国境の終了座標（南東角）'
      }
    ],
    notes: [
      '国境は最小100×100ブロック、最大1000×1000ブロックです',
      '他国の領土と重複することはできません',
      '国境設定後は保護システムが自動的に有効になります',
      '国王または管理者権限が必要です'
    ],
    relatedCommands: ['protect-set', 'country-info']
  }
};

export default function CommandDetailPage({ params }: { params: { id: string } }) {
  const command = commandDetails[params.id as keyof typeof commandDetails];

  if (!command) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
        <h1 className="text-2xl font-bold text-stone-900 mb-4">コマンドが見つかりません</h1>
        <Button asChild>
          <Link href="/commands">
            <ArrowLeft className="mr-2 h-4 w-4" />
            コマンド一覧に戻る
          </Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-6">
        <Button asChild variant="outline" className="mb-4">
          <Link href="/commands">
            <ArrowLeft className="mr-2 h-4 w-4" />
            コマンド一覧に戻る
          </Link>
        </Button>
        
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-stone-900 mb-2">
              <code>{command.name}</code>
            </h1>
            <p className="text-stone-600">{command.description}</p>
          </div>
          <div className="flex gap-2">
            <Badge variant="outline">{command.category}</Badge>
            <Badge variant={command.permission === 'admin' ? 'destructive' : 'secondary'}>
              {command.permission === 'admin' ? '管理者' : '一般'}
            </Badge>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        {/* Usage */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Terminal className="mr-2 h-5 w-5" />
              使用法
            </CardTitle>
          </CardHeader>
          <CardContent>
            <code className="block bg-stone-100 p-4 rounded-lg text-stone-800 font-mono">
              {command.usage}
            </code>
          </CardContent>
        </Card>

        {/* Parameters */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Info className="mr-2 h-5 w-5" />
              パラメータ
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {command.parameters.map((param, index) => (
                <div key={index} className="border-l-4 border-emerald-500 pl-4">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-medium">{param.name}</span>
                    <Badge variant="outline" className="text-xs">{param.type}</Badge>
                    {param.required && (
                      <Badge variant="destructive" className="text-xs">必須</Badge>
                    )}
                  </div>
                  <p className="text-sm text-stone-600">{param.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Examples */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <CheckCircle className="mr-2 h-5 w-5" />
              使用例
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {command.examples.map((example, index) => (
                <div key={index}>
                  <code className="block bg-stone-100 p-3 rounded text-stone-800 font-mono text-sm mb-2">
                    {example.command}
                  </code>
                  <p className="text-sm text-stone-600">{example.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Notes */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <AlertTriangle className="mr-2 h-5 w-5" />
              注意事項
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {command.notes.map((note, index) => (
                <li key={index} className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-amber-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-stone-700">{note}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Related Commands */}
        <Card>
          <CardHeader>
            <CardTitle>関連コマンド</CardTitle>
            <CardDescription>
              このコマンドと併用すると便利なコマンド
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {command.relatedCommands.map((relatedId) => (
                <Button key={relatedId} asChild variant="outline" size="sm">
                  <Link href={`/commands/${relatedId}`}>
                    /{relatedId.replace('-', ' ')}
                  </Link>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}