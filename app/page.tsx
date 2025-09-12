'use client'

import { useState, useEffect } from 'react'

interface TableOfContentsItem {
  id: string
  title: string
  level: number
}

const tableOfContents: TableOfContentsItem[] = [
  { id: 'introduction', title: '1. はじめに', level: 1 },
  { id: 'information-collection', title: '2. 収集する情報と利用目的', level: 1 },
  { id: 'email-address', title: 'メールアドレス', level: 2 },
  { id: 'user-content', title: 'ユーザーが作成したコンテンツ', level: 2 },
  { id: 'usage-data', title: 'サービスの利用状況に関する情報', level: 2 },
  { id: 'third-party-sharing', title: '3. 第三者への情報提供', level: 1 },
  { id: 'data-security', title: '4. データの管理とセキュリティ', level: 1 },
  { id: 'user-rights', title: '5. ユーザーの権利', level: 1 },
  { id: 'contact', title: '6. お問い合わせ', level: 1 },
  { id: 'policy-changes', title: '7. プライバシーポリシーの変更', level: 1 },
]

export default function PrivacyPolicyPage() {
  const [activeSection, setActiveSection] = useState<string>('')

  useEffect(() => {
    const handleScroll = () => {
      const sections = tableOfContents.map(item => document.getElementById(item.id))
      const scrollPosition = window.scrollY + 100

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(tableOfContents[i].id)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial call

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-primary-700 text-center">
            VocaSpeak プライバシーポリシー
          </h1>
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600">
              最終更新日: 2025年9月8日（制定日）
            </p>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Table of Contents - Sidebar */}
          <aside className="lg:w-1/4 lg:sticky lg:top-8 lg:h-fit">
            <nav className="bg-white rounded-lg shadow-sm border p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">
                目次
              </h2>
              <ul className="space-y-2">
                {tableOfContents.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className={`w-full text-left px-3 py-2 rounded transition-colors duration-200 ${
                        item.level === 2 ? 'ml-4 text-sm' : 'text-sm font-medium'
                      } ${
                        activeSection === item.id
                          ? 'bg-primary-50 text-primary-700 border-l-2 border-primary-500'
                          : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                      }`}
                    >
                      {item.title}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          {/* Main Content */}
          <main className="lg:w-3/4">
            <div className="bg-white rounded-lg shadow-sm border p-8 space-y-8">
              
              {/* Section 1: Introduction */}
              <section id="introduction">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">
                  1. はじめに
                </h2>
                <div className="text-gray-700 leading-relaxed space-y-4">
                  <p>
                    本プライバシーポリシーは、「VocaSpeak」（以下「本サービス」といいます）の利用に際して、
                    運営者が収集するユーザーの個人情報の取扱いについて定めるものです。
                    本サービスをご利用いただくためには、本プライバシーポリシーに同意していただく必要があります。
                  </p>
                </div>
              </section>

              {/* Section 2: Information Collection */}
              <section id="information-collection">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">
                  2. 収集する情報と利用目的
                </h2>
                <div className="text-gray-700 leading-relaxed space-y-4">
                  <p>
                    本サービスの提供にあたり、以下の情報を収集し、それぞれの目的で利用します。
                  </p>

                  <div id="email-address" className="bg-gray-50 rounded-lg p-6 mt-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      メールアドレス
                    </h3>
                    <p>
                      <strong>利用目的:</strong> ユーザーアカウントの作成、ログイン時の本人認証、
                      パスワードリセット、その他アカウント管理に関する重要な通知のため。
                    </p>
                  </div>

                  <div id="user-content" className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      ユーザーが作成したコンテンツ
                    </h3>
                    <div className="space-y-2">
                      <p>
                        <strong>情報の内容:</strong> ユーザーがアプリ内で作成した単語帳名、
                        単語（英単語・日本語訳）などのデータ。
                      </p>
                      <p>
                        <strong>利用目的:</strong> 本サービスのコア機能である単語帳機能を提供し、
                        ユーザーの学習データをクラウド上で安全に保存・同期するため。
                      </p>
                    </div>
                  </div>

                  <div id="usage-data" className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      サービスの利用状況に関する情報
                    </h3>
                    <div className="space-y-2">
                      <p>
                        <strong>情報の内容:</strong> サービス利用ログ、機能の利用頻度など（個人を特定しない形式）。
                      </p>
                      <p>
                        <strong>利用目的:</strong> サービスの不具合改善、機能向上、
                        およびユーザー体験の向上を目的とした分析のため。
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 3: Third Party Sharing */}
              <section id="third-party-sharing">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">
                  3. 第三者への情報提供
                </h2>
                <div className="text-gray-700 leading-relaxed space-y-4">
                  <p>
                    運営者は、以下の場合を除き、ユーザーの個人情報を第三者に提供することはありません。
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>ユーザー本人の同意がある場合</li>
                    <li>法令に基づく場合</li>
                  </ul>
                  
                  <p className="mt-6">
                    本サービスのバックエンド機能を提供するために、以下の第三者サービスを利用しており、
                    サービスの提供に必要な範囲で情報が共有されます。
                  </p>
                  
                  <div className="bg-blue-50 rounded-lg p-6 mt-4">
                    <div className="space-y-2">
                      <p><strong>サービス提供者:</strong> Supabase, Inc.</p>
                      <p>
                        <strong>利用目的:</strong> データベース（単語帳データ等）、
                        ユーザー認証機能の提供のため。
                      </p>
                      <p className="text-sm text-gray-600">
                        Supabase社のプライバシーポリシーについては、同社の公式サイトをご確認ください。
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 4: Data Security */}
              <section id="data-security">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">
                  4. データの管理とセキュリティ
                </h2>
                <div className="text-gray-700 leading-relaxed">
                  <p>
                    運営者は、収集した情報の紛失、盗用、悪用、不正アクセス、漏洩、改ざん、破壊を防ぐための
                    合理的なセキュリティ対策を講じます。ユーザーデータはSupabaseの提供する
                    安全なデータベースに保管されます。
                  </p>
                </div>
              </section>

              {/* Section 5: User Rights */}
              <section id="user-rights">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">
                  5. ユーザーの権利
                </h2>
                <div className="text-gray-700 leading-relaxed">
                  <p>
                    ユーザーは、いつでも本サービス内で自身のアカウント情報を確認、訂正することができます。
                    また、アカウントを削除することにより、サーバーに保存されたすべての個人情報
                    （メールアドレス、作成したコンテンツ）を削除する権利を有します。
                  </p>
                </div>
              </section>

              {/* Section 6: Contact */}
              <section id="contact">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">
                  6. お問い合わせ
                </h2>
                <div className="text-gray-700 leading-relaxed space-y-4">
                  <p>
                    本プライバシーポリシーに関するご質問やご意見がございましたら、
                    以下の連絡先までお問い合わせください。
                  </p>
                  <div className="bg-primary-50 rounded-lg p-6">
                    <p className="font-semibold text-primary-700">
                      連絡先: 
                      <a 
                        href="mailto:k.designcreateform@gmail.com"
                        className="ml-2 text-primary-600 hover:text-primary-800 underline"
                      >
                        k.designcreateform@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 7: Policy Changes */}
              <section id="policy-changes">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">
                  7. プライバシーポリシーの変更
                </h2>
                <div className="text-gray-700 leading-relaxed">
                  <p>
                    運営者は、法令の改正やサービスの変更に伴い、本プライバシーポリシーを改定することがあります。
                    重要な変更がある場合は、アプリ内での通知など、分かりやすい方法でお知らせします。
                  </p>
                </div>
              </section>

              {/* Footer */}
              <footer className="border-t border-gray-200 pt-8">
                <div className="text-center">
                  <p className="text-lg font-semibold text-gray-800">制定日: 2025年9月8日</p>
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <p className="text-sm text-gray-600">
                      © 2025 VocaSpeak. All rights reserved.
                    </p>
                  </div>
                </div>
              </footer>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}