# Frontend of Techers TCC
- O backend vai receber uma requisicao desse frontend aqui com fetch() do Js para linkar o front com o back.
- Por meio desse modo que os dois vao operar juntos.
- Ha um repositorio separado pro backend 

## Detalhando estrutura do front:
> obs: O workflow ideal eh comecar nas paginas principais e ir para as subjacentes, que vao ser as derivadas da home. entao comecar na home eh o mais ideal. planejar o wireframe (comecando pela main), fazer ela primeiro e decidir os componenets mais essenciais a partir dela tende a ser o melhor caminho (quebrar ela em componentes como header, footer, searchbar etc), e depois adicionar as paginas extras derivadas dela.

- Pagina principal eh o arquivo "index.html" na pasta raiz mesmo ("/my-app"). tem uma div principal nesse index que eh a div com id = root.
- src/main.jsx pega o code react e injeta dentro da div root do index.html. esse arq chama o componente <App/>
- src/App.jsx -> tudo que for colocado dentro do return vai aparecer na tela inicial porque ja vem configurado como a pag principal.
- Para as rotas -> precisa de react-router-dom `npm install react-router-dom` 
- As paginas adjacentes (login, signin e sla mais oq) fica dentro de src/pages
- configurar rotas be like:
```import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Sobre from './pages/Sobre';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* O caminho "/" define qual é a Página Principal */}
        <Route path="/" element={<Home />} />

        {/* Outras páginas do seu site */}
        <Route path="/sobre" element={<Sobre />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```

## File tree be like:
```
src/
├── components/   
├── pages/        
├── assets/       
├── App.jsx       
└── main.jsx   
```

## Estilizacao -> Componentes e Etc

**Estilizacao Global:**
>Regras pra todo o site
- `index.css` na /src que tem que ser um arquivo importado no `main.jsx`

**Estilizacao por Componente:**
- Poderia usar por moddulo, mas preferi fazer sem.
- basicamente eh so criar um arquivo `.css` com o mesmo nome do componente e importar ele no codigo do componente, e so usar, com as classes e ids
- a limitacao disso eh que nao da p repetir nome de classes em componentes diferentes
- vou deixar uma pasta so de estilizacao mesmo dentro dos componentes, para facilitar a importacao -> `import 'styles/nomedoarquivo.css'`.