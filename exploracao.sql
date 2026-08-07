-- =========================================================
-- Banco de Dados de Exploração - Aula 01
-- Disciplina: Banco de Dados
--
-- Objetivo:
-- Criar um ambiente simples para explorar:
-- - criação de estruturas;
-- - armazenamento de informações;
-- - consultas SQL.
--
-- Este script cria o schema exploracao e popula três tabelas:
-- - alunos
-- - paises
-- - animais
-- =========================================================

-- ATENÇÃO!!
-- VERIFIQUE SE VOCÊ CRIOU A DATABASE ANTES!!

-- =========================================================
-- Criação do schema
-- =========================================================

CREATE SCHEMA IF NOT EXISTS exploracao;


-- =========================================================
-- Tabela: alunos
-- =========================================================

CREATE table IF NOT EXISTS exploracao.alunos (
    id SERIAL PRIMARY KEY,
    nickname VARCHAR(50),
    nome_completo VARCHAR(100),
    perfil VARCHAR(20),
    raridade VARCHAR(20)
);


INSERT INTO exploracao.alunos
(nickname, nome_completo, perfil, raridade)
VALUES
('HUFFENBAECHER', 'Bruno H. H. M. Oliveira', 'staff', NULL),
('Gersão', 'Gerson Honório', 'staff', NULL),
('Carol', 'Ana Carolina P. da Silva', 'student', 'gold'),
('Ana', 'Ana Vitória A. Octaviano', 'student', 'gold'),
('Bia Brito', 'Beatriz Brito Dias', 'student', 'gold'),
('Bia', 'Beatriz G. O. Andrade', 'student', 'silver'),
('BIA', 'Beatriz Godoy de Souza', 'student', 'bronze'),
('Dona Rosa', 'Bianca de Souza Rosa', 'student', 'silver'),
('Caio da bola', 'Caio Begnami dos Santos', 'student', 'gold'),
('Davi', 'Davi Tordato Martarello', 'student', 'bronze'),
('Tirsu', 'Gustavo H. S. Azevedo', 'student', 'bronze'),
('Terassi', 'Gustavo Moreira Terassi', 'student', 'bronze'),
('Dias', 'Gustavo Vieira Dias', 'student', 'gold'),
('HELENA', 'Helena O. Petrenis', 'student', 'bronze'),
('PIRAN', 'João V. Piran Columbari', 'student', 'bronze'),
('pitanga', 'Joao Victor Pitanguy', 'student', 'bronze'),
('KAKO', 'Kauan F. O. de Almeida', 'student', 'bronze'),
('LARA CROFT', 'Lara Rafaela Pelingrin', 'student', 'bronze'),
('Lari', 'Larissa Juliatti Visioli', 'student', 'bronze'),
('Luisin', 'Luís O. L. Fernandes', 'student', 'bronze'),
('Baladinha', 'Maria Eduarda S. Gonçalves', 'student', 'silver'),
('bebel', 'Maria Isabel A. Bernardo', 'student', 'silver'),
('Bigode', 'Matheus Vieira', 'student', 'silver'),
('Meller', 'Miguel A. S. L. Meller', 'student', 'bronze'),
('Murilim', 'Murilo D. Tofanin', 'student', 'silver'),
('Nathy', 'Nathally A. dos Santos', 'student', 'silver'),
('Fadéli', 'Olavo Fadéli', 'student', 'bronze'),
('Ray', 'Rayane Yasmin dos Santos', 'student', 'bronze'),
('Tosetti', 'Ryan Gabriel Tosetti', 'student', 'bronze'),
('Cirulli', 'Víctor S. C. Nascimento', 'student', 'bronze'),
('Vinimito', 'Vinícius L. Rosa', 'student', 'bronze'),
('Vithin', 'Víthor A. L. Ferronato', 'student', 'gold'),
('Zanata', 'Yasmin L. Zanata', 'student', 'gold'),
('YAS', 'Yasmin V. A. Oliveira', 'student', 'silver');


-- =========================================================
-- Tabela: paises
-- =========================================================

CREATE table IF NOT EXISTS exploracao.paises (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100),
    capital VARCHAR(100),
    continente VARCHAR(50),
    populacao BIGINT,
    area_km2 INTEGER,
    tem_mar BOOLEAN
);


INSERT INTO exploracao.paises
(nome, capital, continente, populacao, area_km2, tem_mar)
VALUES
('Alemanha', 'Berlim', 'Europa', 84000000, 357022, TRUE),
('França', 'Paris', 'Europa', 68000000, 551695, TRUE),
('Itália', 'Roma', 'Europa', 59000000, 301340, TRUE),
('Espanha', 'Madri', 'Europa', 48000000, 505990, TRUE),
('Portugal', 'Lisboa', 'Europa', 10000000, 92212, TRUE),
('Reino Unido', 'Londres', 'Europa', 68000000, 243610, TRUE),
('Irlanda', 'Dublin', 'Europa', 5300000, 70273, TRUE),
('Países Baixos', 'Amsterdã', 'Europa', 18000000, 41850, TRUE),
('Bélgica', 'Bruxelas', 'Europa', 12000000, 30528, TRUE),
('Suíça', 'Berna', 'Europa', 9000000, 41285, FALSE),
('Áustria', 'Viena', 'Europa', 9000000, 83879, FALSE),
('Polônia', 'Varsóvia', 'Europa', 38000000, 312696, TRUE),
('República Tcheca', 'Praga', 'Europa', 11000000, 78867, FALSE),
('Grécia', 'Atenas', 'Europa', 10000000, 131957, TRUE),
('Noruega', 'Oslo', 'Europa', 5500000, 385207, TRUE),
('Suécia', 'Estocolmo', 'Europa', 10600000, 450295, TRUE),
('Finlândia', 'Helsinque', 'Europa', 5600000, 338455, TRUE),
('Dinamarca', 'Copenhague', 'Europa', 6000000, 43094, TRUE),
('Hungria', 'Budapeste', 'Europa', 9600000, 93030, FALSE),
('Romênia', 'Bucareste', 'Europa', 19000000, 238397, TRUE),
('Brasil', 'Brasília', 'América', 210000000, 8515767, TRUE),
('Canadá', 'Ottawa', 'América', 41000000, 9984670, TRUE),
('Estados Unidos', 'Washington', 'América', 340000000, 9833517, TRUE),
('México', 'Cidade do México', 'América', 130000000, 1964375, TRUE),
('Japão', 'Tóquio', 'Ásia', 123000000, 377975, TRUE),
('China', 'Pequim', 'Ásia', 1410000000, 9596961, TRUE),
('Índia', 'Nova Délhi', 'Ásia', 1450000000, 3287263, TRUE),
('Coreia do Sul', 'Seul', 'Ásia', 51000000, 100210, TRUE),
('Egito', 'Cairo', 'África', 110000000, 1002450, TRUE),
('África do Sul', 'Pretória', 'África', 62000000, 1221037, TRUE);


-- =========================================================
-- Tabela: animais
-- =========================================================

CREATE table IF NOT EXISTS exploracao.animais (
    id SERIAL PRIMARY KEY,
    nome_popular VARCHAR(100),
    nome_cientifico VARCHAR(100),
    grupo VARCHAR(50),
    habitat VARCHAR(100),
    peso_medio_kg DECIMAL(6,2),
    descricao TEXT,
    foto_url TEXT
);


INSERT INTO exploracao.animais
(nome_popular, nome_cientifico, grupo, habitat, peso_medio_kg, descricao, foto_url)
VALUES
('Coelho Angorá',
'Oryctolagus cuniculus',
'Mamífero',
'Áreas domésticas e criadouros',
3.50,
'Conhecido pela pelagem longa e macia, o coelho Angorá é uma das raças de coelho mais populares.',
'https://cdn0.peritoanimal.com.br/pt/posts/4/1/1/coelho_angora_oryctolagus_cuniculus_23114_0_orig.jpg'),
('Esquilo-vermelho',
'Sciurus vulgaris',
'Mamífero',
'Florestas temperadas',
0.35,
'O esquilo-vermelho utiliza sua agilidade para se movimentar entre árvores e armazenar alimentos.',
'https://cdn0.peritoanimal.com.br/pt/posts/4/1/1/esquilo_vermelho_sciurus_vulgaris_23114_1_orig.jpg'),
('Doninha-de-patas-pretas',
'Mustela nigripes',
'Mamífero',
'Pradarias da América do Norte',
1.00,
'É um pequeno predador conhecido pela máscara escura no rosto e pelas patas com coloração característica.',
'https://cdn0.peritoanimal.com.br/pt/posts/4/1/1/doninha_de_patas_pretas_mustela_nigripes_23114_2_orig.jpg'),
('Foca-monge-do-mediterrâneo',
'Monachus monachus',
'Mamífero',
'Regiões costeiras do Mediterrâneo',
240.00,
'É uma das espécies de foca mais raras do mundo.',
'https://cdn0.peritoanimal.com.br/pt/posts/4/1/1/foca_monge_do_mediterraneo_monachus_monachus_23114_3_orig.jpg'),
('Canguru Bennett arborícola',
'Dendrolagus bennettianus',
'Mamífero',
'Florestas tropicais da Austrália',
14.00,
'Este canguru passa grande parte da vida em árvores, diferente dos cangurus terrestres tradicionais.',
'https://cdn0.peritoanimal.com.br/pt/posts/4/1/1/canguru_bennett_arboricola_dendrolagus_bennettianus_23114_4_orig.jpg'),
('Leopardo-das-neves',
'Panthera uncia',
'Mamífero',
'Montanhas da Ásia Central',
45.00,
'Possui uma pelagem adaptada para ambientes frios e montanhosos.',
'https://cdn0.peritoanimal.com.br/pt/posts/4/1/1/leopardo_das_neves_panthera_uncia_23114_5_orig.jpg'),
('Pika-de-Ili',
'Ochotona iliensis',
'Mamífero',
'Regiões montanhosas da China',
0.20,
'Pequeno mamífero aparentado aos coelhos, conhecido por sua aparência fofa.',
'https://cdn0.peritoanimal.com.br/pt/posts/4/1/1/pika_de_lli_ochotona_iliensis_23114_6_orig.jpg'),
('Kiwi',
'Apteryx mantelli',
'Ave',
'Florestas da Nova Zelândia',
3.00,
'É uma ave que não voa e possui hábitos principalmente noturnos.',
'https://cdn0.peritoanimal.com.br/pt/posts/4/1/1/kiwi_apteryx_mantelli_23114_7_orig.jpg'),
('Colibri-abelha-cubano',
'Mellisuga helenae',
'Ave',
'Florestas de Cuba',
0.002,
'É considerado o menor pássaro do mundo.',
'https://cdn0.peritoanimal.com.br/pt/posts/4/1/1/colibri_abelha_cubano_mellisuga_helenae_23114_8_orig.jpg'),
('Chinchila comum',
'Chinchilla lanigera',
'Mamífero',
'Regiões montanhosas do Chile',
0.60,
'Conhecida pela pelagem extremamente macia e densa.',
'https://cdn0.peritoanimal.com.br/pt/posts/4/1/1/colibri_abelha_cubano_mellisuga_helenae_23114_8_orig.jpg'),
('Castor americano',
'Castor canadensis',
'Mamífero',
'Rios e lagos da América do Norte',
25.00,
'É conhecido pela capacidade de construir barragens utilizando madeira.',
'https://cdn0.peritoanimal.com.br/pt/posts/4/1/1/colibri_abelha_cubano_mellisuga_helenae_23114_8_orig.jpg'),
('Cisne branco',
'Cygnus olor',
'Ave',
'Lagos e rios',
11.00,
'Ave conhecida pela aparência elegante e pelo longo pescoço.',
'https://cdn0.peritoanimal.com.br/pt/posts/4/1/1/cisne_branco_cygnus_olor_23114_11_orig.jpg'),
('Ovelha',
'Ovis orientalis aries',
'Mamífero',
'Áreas rurais',
50.00,
'Animal domesticado conhecido pela produção de lã.',
'https://cdn0.peritoanimal.com.br/pt/posts/4/1/1/ovelha_ovis_orientalis_aries_23114_12_orig.jpg'),
('Alpaca',
'Vicugna pacos',
'Mamífero',
'Regiões montanhosas da América do Sul',
60.00,
'Animal criado principalmente pela sua lã macia.',
'https://cdn0.peritoanimal.com.br/pt/posts/4/1/1/alpaca_vicugna_pacos_23114_13_orig.jpg'),
('Hamster sírio',
'Mesocricetus auratus',
'Mamífero',
'Ambientes domésticos',
0.12,
'Pequeno roedor muito popular como animal de estimação.',
'https://cdn0.peritoanimal.com.br/pt/posts/4/1/1/hamster_sirio_mesocricetus_auratus_23114_14_orig.jpg'),
('Panda-gigante',
'Ailuropoda melanoleuca',
'Mamífero',
'Florestas de bambu da China',
100.00,
'O panda-gigante passa grande parte do dia se alimentando de bambu.',
'https://cdn0.peritoanimal.com.br/pt/posts/4/1/1/panda_gigante_ailuropoda_melanoleuca_23114_15_orig.jpg'),
('Feneco',
'Vulpes zerda',
'Mamífero',
'Desertos do norte da África',
1.50,
'Pequena raposa conhecida pelas grandes orelhas.',
'https://cdn0.peritoanimal.com.br/pt/posts/4/1/1/panda_gigante_ailuropoda_melanoleuca_23114_15_orig.jpg'),
('Lóris lento pigmeu',
'Nycticebus pygmaeus',
'Mamífero',
'Florestas tropicais do Sudeste Asiático',
0.45,
'É um pequeno primata de movimentos lentos e aparência característica.',
'https://cdn0.peritoanimal.com.br/pt/posts/4/1/1/loris_lento_pigmeu_nycticebus_pygmaeus_23114_17_orig.jpg'),
('Vombate',
'Vombatus ursinus',
'Mamífero',
'Regiões da Austrália',
25.00,
'Animal australiano conhecido pelo corpo robusto e comportamento tranquilo.',
'https://cdn0.peritoanimal.com.br/pt/posts/4/1/1/vombate_vombatus_ursinus_23114_18_orig.jpg');