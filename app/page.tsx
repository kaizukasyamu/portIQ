export default function Home() {
  return (
    
   <> 
      <div className="bg-white text-black min-h-screen ">

    <header className="flex justify-between items-center p-4 border-b font-bold">
      
      <div>
        ハンバーガー
      </div>

      <div>
        PortIQ
      </div>
      
      <div>
        使い方 ログイン
      </div>
    </header>

    <div className="flex">

     <aside className="w-64 flex flex-col gap-3 bg-gray-100 p-4 h-screen">

      <h2>PortIQ</h2>
      
       <div>
        <div>機能A</div>

        <div>機能B</div>

        <div>機能C</div>

       </div>

        <div>利用規約</div>

        <div>お問い合わせ</div>

        <div>FQA</div>

     </aside>  

     <main className="text-center mt-20 flex-1 overflow-y-auto">

      <h1 className="text-2xl">
        AI Portfolio Reviewer
      </h1>

      <textarea 
        className="w-full max-w-3xl h-32 border rounded-lg p-4"
        placeholder="ここにポートフォリオを貼り付けてください"
      />          
      <div>
       <button 
        className="bg-blue-600 text-white px-3 py-1 rounded-lg"
       >  
        添削する
       </button>  
      </div>
     </main>

    </div>
    
    </div>
   </> 
  );
}