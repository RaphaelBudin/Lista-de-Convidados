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

**Propriedades dos presentes**:
- ID (autogerado)
- Nome Presente
- Convidados (campo relacional)
- Quantidade estimada
- Quantidade obtida

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

# Habilidades abordadas neste projeto #
- Roteamento
- Modals
- Pesquisa de informações
- Filtro de informações
- Ordenação de informações