import { Inter } from "next/font/google";
import Head from "next/head";
import Modal from "@/components/Modal";
import Post from "@/components/Post";
import { useState } from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonNext,
  ButtonBack,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css"; // スライダースタイルのインポート

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPostInfo, setSelectedPostInfo] = useState<any>(null);

  const openModal = (postInfo: any) => {
    setSelectedPostInfo(postInfo);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedPostInfo(null);
    setIsModalOpen(false);
  };

  const postInfoList = [
    {
      id: 1,
      title: "脚本を投稿するプラットフォーム",
      imageUrl: "/img/aaa.png",
      youtubeEmbedUrl: "",
      description: "https://gikyokumori-front.vercel.app/",
      githubUrl: "",
      usedTechnologies: "ruby, Next.js, rails",
      genre: "webアプリ",
    },
    {
      id: 2,
      title: "Wash Town",
      imageUrl:
        "https://github.com/ICHINOMIYA1038/ICHINOMIYA1038.github.io/blob/main/docs/portfolio/images/game-Images/washtownImage.png?raw=true",
      youtubeEmbedUrl: "https://www.youtube.com/embed/d9GrC7sAbiU",
      description:
        "制作期間: 2022.12.20〜2023.3,シェーダーの学習として作成しました。,ジャンル: 洗浄アクション,ターゲットプラットフォーム: PC",
      githubUrl: "https://github.com/ICHINOMIYA1038/WashTown",
      usedTechnologies: "Unity, C#",
      googleDriveUrl:
        "https://drive.google.com/drive/folders/14diWIy9IXw748g8Tawb8s2EFwUuKDmMP?usp=share_link",
      genre: "ゲーム",
    },
    {
      id: 3,
      title: "Hide and Beep",
      imageUrl:
        "https://github.com/ICHINOMIYA1038/ICHINOMIYA1038.github.io/blob/main/docs/portfolio/images/game-Images/topImage.png?raw=true",
      youtubeEmbedUrl: "https://www.youtube.com/embed/KxBCKCH05N8",
      description:
        "制作期間: 2022.11.14〜2022.12.14,ジャンル: アクション&ホラー,人体のアニメーションの学習として制作しました。,またP2P通信のライブラリを使って、通信の処理を実装しました。,ターゲットプラットフォーム: PC",
      githubUrl: "https://github.com/ICHINOMIYA1038/HideAndBeep",
      usedTechnologies: "Unity, C#, PHOTON2",
      genre: "ゲーム",
      googleDriveUrl:
        "https://drive.google.com/drive/folders/1cGJktuzzaXCEP4J19f5BCioWcYntmG55?usp=share_link",
    },
    {
      id: 4,
      title: "箱庭戦争",
      imageUrl:
        "https://github.com/ICHINOMIYA1038/ICHINOMIYA1038.github.io/blob/main/docs/portfolio/images/game-Images/ShootingImage.png?raw=true",
      youtubeEmbedUrl: "https://www.youtube.com/embed/UGSaX0sVhDM",
      description:
        "制作期間: 2022.10.16〜2022.11.10,ジャンル: 3Dシューティング,Unityでの最初の作品制作として、Unity及びC#の基本を学習するために制作しました。,ターゲットプラットフォーム: PC",
      githubUrl: "https://github.com/ICHINOMIYA1038/ShootingProject",
      genre: "ゲーム",
      usedTechnologies: "Unity, C#",
    },
    {
      id: 5,
      title: "簡易画像編集アプリ",
      imageUrl:
        "https://github.com/ICHINOMIYA1038/ICHINOMIYA1038.github.io/blob/main/docs/portfolio/images/imageEditApp.png?raw=true",
      youtubeEmbedUrl: "https://www.youtube.com/embed/ZiS4QVPwqn0",
      description:
        "制作期間: 2022.8〜2022.9,夏休みの自主制作として、作成した画像編集アプリです。,画像の回転・リサイズ、ヒストグラムの表示と色彩の変更が可能です。,C++で、OpenCV,SDLを使っています。,UIはIMGUIというライブラリを使っています。",
      githubUrl: "https://github.com/ICHINOMIYA1038/WashTown",
      genre: "デスクトップアプリ",
      usedTechnologies: "SDL IMGUI C++",
    },
    {
      id: 6,
      title: "学習時間管理アプリ",
      imageUrl:
        "https://github.com/ICHINOMIYA1038/ICHINOMIYA1038.github.io/blob/main/docs/portfolio/images/AndroidStudio.png?raw=true",
      youtubeEmbedUrl: "https://www.youtube.com/embed/z-6BYmsOPaA",
      description:
        "制作期間: 2022.8.15〜2022.9.20,SpreadSheetAPIを用いて、Android端末上からスプレッドシートを編集するアプリです。,アンドロイドネイティブアプリの仕組みを知るために制作しました。,ターゲットプラットフォーム: Androidスマートフォン",
      githubUrl: "https://github.com/ICHINOMIYA1038/androidApp",
      usedTechnologies: "AndroidStudio, Java, spreadSheetAPI",
      genre: "モバイルアプリ",
    },
  ];

  return (
    <div className="px-4">
      <Head>
        <title>ポートフォリオ</title>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
      </Head>
      <div className="flex ">
        <div className="md:w-1/2 h-screen">
          <div className="text-2xl font-bold bg-white rounded-md mr-5 mt-10 mb-5 py-5 pl-10 pr-5">
            <h2>卒業制作ポートフォリオ</h2>
          </div>

          <div className="bg-white rounded-md mr-5 p-10">
            <h3 className="font-bold text-xl mb-5">プロフィール</h3>
            <p>一ノ宮綾平</p>
            <p>九州デザイナー学院ゲームCG学科ゲームプログラム専攻2年</p>
            <p>
              現在は東京の企業に内定をもらいインターンで研修を受けています。
            </p>
          </div>
          <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={100}
            totalSlides={8} // アイコンの総数に合わせて調整
            visibleSlides={5} // 一度に表示するアイコンの数を調整
            className="mr-5 bg-white p-10 mt-5 select-none rounded-md "
          >
            <h3 className="font-bold text-xl mb-5">スキル</h3>
            <Slider>
              <Slide index={0}>
                <div className="text-center">
                  <i className="devicon-react-original-wordmark colored text-6xl" />
                  <p className="mt-2">React</p>
                </div>
              </Slide>
              <Slide index={1}>
                <div className="text-center">
                  <i className="devicon-nextjs-plain-wordmark colored text-5xl" />
                  <p className="mt-2">Next.js</p>
                </div>
              </Slide>
              <Slide index={2}>
                <div className="text-center">
                  <i className="devicon-typescript-plain colored text-5xl" />
                  <p className="mt-2">TypeScript</p>
                </div>
              </Slide>
              <Slide index={3}>
                <div className="text-center">
                  <i className="devicon-tailwindcss-original-wordmark colored text-5xl" />
                  <p className="mt-2">Tailwind CSS</p>
                </div>
              </Slide>
              <Slide index={4}>
                <div className="text-center">
                  <i className="devicon-ruby-plain-wordmark colored text-5xl" />
                  <p className="mt-2">Ruby</p>
                </div>
              </Slide>
              <Slide index={5}>
                <div className="text-center">
                  <i className="devicon-rails-plain-wordmark colored text-5xl" />
                  <p className="mt-2">Rails</p>
                </div>
              </Slide>
              <Slide index={6}>
                <div className="text-center">
                  <i className="devicon-csharp-plain colored text-5xl" />
                  <p className="mt-2">C#</p>
                </div>
              </Slide>
              <Slide index={7}>
                <div className="text-center">
                  <i className="devicon-unity-original-wordmark colored text-5xl" />
                  <p className="mt-2">Unity</p>
                </div>
              </Slide>
            </Slider>
            <div className="flex justify-between">
              <div className="text-sm text-center font-bold rounded-md bg-blue-200 w-16">
                <ButtonBack>Back</ButtonBack>
              </div>
              <div className="text-sm text-center font-bold rounded-md bg-blue-200 w-16">
                <ButtonNext>Next</ButtonNext>
              </div>
            </div>
          </CarouselProvider>

          <div className="bg-white rounded-md mt-5 p-10 mr-5">
            <h3 className="font-bold text-xl mb-5">問い合わせ</h3>
            <p>メールアドレス:ichiryo108@gmail.com</p>
            <p className="mb-8">電話番号:080-8383-6352</p>
          </div>
        </div>

        <div className="md:w-1/2 h-screen">
          <div className="bg-white rounded-md mt-10 p-5">
            <h3 className="font-bold text-xl">作品</h3>
          </div>
          <div className="mt-5 grid grid-cols-1 gap-4 overflow-y-scroll h-4/5">
            {postInfoList.map((postInfo) => (
              <div
                key={postInfo.id}
                className="group cursor-pointer transform hover:shadow-2xl  transition-transform"
                onClick={() => openModal(postInfo)}
              >
                <div className="bg-white hover:bg-blue-200 shadow-lg rounded-lg overflow-hidden flex">
                  <img
                    src={postInfo.imageUrl}
                    alt={postInfo.title}
                    className="w-1/3 h-auto object-cover"
                  />
                  <div className="flex-1 p-4">
                    <h2 className="text-xl font-semibold mb-2">
                      {postInfo.title}
                    </h2>
                    <p>
                      <span className="font-bold mr-2">ジャンル:</span>
                      {postInfo.genre}
                    </p>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        openModal(postInfo);
                      }}
                      className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition duration-300"
                    >
                      {postInfo.title}の詳細を見る
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {selectedPostInfo && (
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <Post {...selectedPostInfo} />
        </Modal>
      )}
    </div>
  );
}
