## Passos atuais

  ### Fase de bundle
  - Faz o bundle (com webpack) do arquivo de entrada da aplicação
  - Cria um executável desse bundle, ou seja, crio um "container" node para acionar essa aplicação
  
  ### Fase de compilação
  - Comprimo a pasta build, com todos os arquivos necessário para rodar. 
  - Gero um executável da minha aplicação com os seguintes arquivos 
    -  `build.zip` -> Contendo toda a pasta `build` da aplicação
    - `descompress.js` -> responsável pela descompressão do arquivo `build.zip`

  ### Fase final
  - O arquivo `monitory_sftw.exe` gerado, contém o arquivo zip como falando acima, ao executar ele criará uma pasta em `C:\ProgramData\` com o nome `Monitory_software` contendo todos os arquivos que anteriormente estavam em `build/`