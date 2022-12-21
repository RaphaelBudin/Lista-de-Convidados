# Motivação #
Praticar React ao criar um sistema de convidados gerenciada pelo anfitrião (sem login).

O sistema terá:
- Lista de Convidados
- Lista de Presentes

## Regras de Negócio ##

**Propriedades dos convidados**:
- ID (autogerado)
- Nome Completo
- Idade
- Confirmardo?
- Horário de chegada
- Foto de Perfil
- Acompanhantes?
    - Número de acompanhantes
- Presente?
    - ID Presente (campo relacional)
    - Quantidade presenteada

**Propriedades dos presentes (lista de presentes)**:
- ID (autogerado)
- Nome Presente
- Convidados (campo relacional)
- Quantidade estimada
- Quantidade obtida

**Propriedades dos presentes (dado pelo convidado)**:
- ID (autogerado)
- Nome Presentes
- Convidados (campo relacional)
- Quantidade dada

**Requisitos funcionais**:
- Filtrar convidados por:
    - Nome
    - Faixa etária (range)
    - Confirmação
    - Atraso
    - Número de acompanhantes
    - Horário de chegada (divido por hora)
    - Presente?
- Filtrar presentes por:
    - Nome
    - Convidados (quem estará levando)
    - Meta de quantidade alcancada
    
- Após anfritrião define um horário inicial, permite identificar quem vai chegar atrasado (+1 hora do início)
- Convidados podem trazer 0-n presentes

# Habilidades abordadas neste projeto #
- Roteamento
- Modals
- Pesquisa de informações
- Filtro de informações
- Ordenação de informações

### Precisa fazer ###
-> Array de Presentes Escolhidos na variavel 'usuarios' estão errados
-> Fazer cadastro do Convidado em várias telas
    1: Nome, Idade, Confirmado, Horário Chegada, Acompanhantes
    2: Cadastro dos Presentes
-> Vincular o presente ao convidado-raiz