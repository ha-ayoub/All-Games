export const ko = {
  title: '아르카디아',

  sidebar: {
    title: '아르카디아',
    subtitle: '게임이 시작되는 곳',
    home: '홈',
    about: '소개',
    help: '도움말',
  },

  games: {
    tictactoe: {
      title: '틱택토',
      description: '두 플레이어를 위한 클래식 전략 게임. 세 개의 기호를 정렬하여 승리하세요.',
      objective: '3개의 기호(X 또는 O)를 가로, 세로 또는 대각선으로 정렬합니다.',
      instructions: '빈 칸을 클릭하여 기호를 배치합니다. 상대방과 번갈아 가며 플레이합니다.'
    },
    hangman: {
      title: '행맨',
      description: '시간이 다 되기 전에 신비한 단어를 글자별로 맞춰보세요.',
      objective: '교수형이 완성되기 전에 신비한 단어를 글자별로 맞춥니다.',
      instructions: '글자를 클릭하여 추측합니다. 실수에 주의하세요!'
    },
    memory: {
      title: '메모리 카드',
      description: '동일한 카드 쌍을 찾아 기억력을 테스트하고 향상시키세요.',
      objective: '모든 동일한 카드 쌍을 찾습니다.',
      instructions: '두 장의 카드를 클릭하여 뒤집습니다. 일치하면 계속 보입니다.'
    },
    sudoku: {
      title: '스도쿠',
      description: '올바른 숫자로 칸을 채워 이 논리 격자를 풀어보세요.',
      objective: '반복 없이 1부터 9까지의 숫자로 격자를 채웁니다.',
      instructions: '칸을 클릭하고 숫자를 선택합니다. 각 행, 열 및 영역에는 1-9 숫자가 포함되어야 합니다.'
    },
    rockPaperScissors: {
      title: '가위바위보',
      description: '최선의 선택을 하여 컴퓨터를 이기세요: 바위, 보, 가위.',
      objective: '최선의 선택을 하여 컴퓨터를 이깁니다: 바위, 보, 가위.',
      instructions: '바위, 보 또는 가위를 클릭하여 컴퓨터와 대결합니다. 승리는 고전 규칙에 따라 결정됩니다: 바위는 가위를 이기고, 가위는 보를 이기고, 보는 바위를 이깁니다.'
    }
  },

  home: {
    title: '게임 탐색',
    subtitle: '어제와 오늘의 게임 마법을 재발견하세요.',
    searchPlaceholder: '게임 검색...',
    allGames: '모든 게임',
    noResults: '검색 결과를 찾을 수 없습니다',
  },

  about: {
    title: '소개',
    subtitle: '이 프로젝트와 창작자를 만나보세요',
    projectTitle: '프로젝트',
    gamesTitle: '게임',
    gameObjective: '목표',
    gameExplain: '플레이 방법',
    techTitle: '기술',
    devTitle: '개발자',
    devDescription: '게임과 깨끗한 코드에 열정을 가진 개발자가 열정적으로 개발한 프로젝트입니다.',
    featuresTitle: '특징',
    projectDescription1: `아르카디아는 한동안 마음에 품고 있던 프로젝트입니다. 여러 개의
                미니 게임을 따로 개발했는데, 진정한 일관성 없이 흩어져 두는 것이 아까웠습니다.
                그래서 그들에게 진정한 공통 정체성을 부여하고 자연스럽게 공존할 수 있는 장소를
                만들기로 결정했습니다.`,
    projectDescription2: `기술적인 측면을 넘어 제게 정말 중요했던 것은
                경험이었습니다: 사람들이 탐색을 즐기고,
                인터페이스가 아름답고 기능적이며, 모든 것이 부드럽기를 원했습니다. 세부 사항,
                색상 선택, 애니메이션, 반응형 디자인에 상당한 시간을 보냈습니다... 저에게 아르카디아는
                단순한 게임 모음이 아니라, 모두가 접근하고 즐길 수 있도록 고안된
                작은 정성 어린 웹 경험입니다.`,
  },

  help: {
    title: '도움말 센터',
    subtitle: '질문에 대한 답변 찾기',
    subtitle2: '그리고 무엇보다... 즐기세요!',
    quickStart: '빠른 시작',
    step1: '게임 선택',
    step1_subtitle: '홈페이지에서 게임 컬렉션 탐색',
    step2: '클릭하여 플레이',
    step2_subtitle: '게임 카드를 클릭하거나 내비게이션 메뉴 사용',
    step3: '즐기세요!',
    step3_subtitle: '게임 지침을 따르고 경험을 즐기세요',
    tips: '팁과 조언',
    tip_dark: '다크 모드 사용',
    tip_darkDesc: '사이드바의 토글을 통해 다크 모드를 활성화하여 밤에도 편안하게 플레이하세요.',
    tip_play: '이동 중 플레이',
    tip_playDesc: '모든 게임은 모바일에 최적화되어 있습니다. 빠른 액세스를 위해 사이트를 홈 화면에 추가하세요.',
    tip_search: '빠른 검색',
    tip_searchDesc: '홈페이지의 검색 바를 사용하여 게임을 빠르게 찾으세요',
    faq: '자주 묻는 질문',
    faqItems: [
      {
        question: '게임 플레이 방법은?',
        answer: '홈페이지에서 게임 카드를 클릭하거나 왼쪽의 내비게이션 메뉴를 사용하세요. 각 게임에는 고유한 규칙이 있습니다.'
      },
      {
        question: '테마(라이트/다크 모드) 변경 방법은?',
        answer: '사이드바 상단에 있는 토글을 사용하세요.'
      },
      {
        question: '게임이 모바일에서 작동하나요?',
        answer: '네! 모든 게임은 모바일, 태블릿 및 데스크톱에 최적화되어 있습니다. 인터페이스는 화면 크기에 자동으로 적응합니다.'
      },
      {
        question: '오프라인에서 플레이할 수 있나요?',
        answer: '게임이 로드되면 인터넷 연결이 끊어져도 계속 플레이할 수 있습니다.'
      }
    ]
  },

  categories: {
    strategy: '전략',
    reflection: '사고',
    memory: '기억',
    logic: '논리',
    action: '액션',
  },

  common: {
    play: '플레이',
    playNow: '지금 플레이',
    loading: '로딩 중',
    back: '뒤로',
    restart: '다시 시작',
    newGame: '새 게임',
    exit: '종료',
    settings: '설정',
    theme: '테마',
    language: '언어',
  },
};