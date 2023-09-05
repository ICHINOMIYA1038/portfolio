// components/Post.tsx
import React, { useState } from 'react';

interface PostProps {
  title: string;
  imageUrl: string;
  youtubeEmbedUrl: string;
  description: string;
  githubUrl: string;
  usedTechnologies: string;
  genre:string
}

const Post: React.FC<PostProps> = ({
  title,
  imageUrl,
  youtubeEmbedUrl,
  description,
  githubUrl,
  usedTechnologies,
  genre,
}) => {
  // Stateを追加してモーダルの表示状態を管理
  const [isModalOpen, setIsModalOpen] = useState(false);

  // モーダルを開く関数
  const openModal = () => {
    setIsModalOpen(true);
  };

  // モーダルを閉じる関数
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // カンマで区切られたdescriptionを改行で区切る
  const descriptionLines = description.split(',');

  return (
    <>
      {/* タイトルを太字で表示 */}
      <h2 className="text-3xl font-bold text-red-500">{title}</h2>
      {/* 画像をクリックしたときにモーダルを表示 */}
      <img
        src={imageUrl}
        alt={title}
        className="my-4 w-1/3 cursor-pointer"
        onClick={openModal}
      />

      {/* モーダルの中身 */}
      {isModalOpen && (
        <div
          className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-gray-800 bg-opacity-80"
          onClick={closeModal}
        >
          <div className="bg-white p-4 max-w-screen-md">
            <img src={imageUrl} alt={title} className="w-full" />
          </div>
        </div>
      )}

      <div className="w-80 h-40">
        {/* 動画の前に「動画」というテキストを追加 */}
        <p className="font-bold text-lg">動画</p>
        <iframe
          src={youtubeEmbedUrl}
          title={title}
          className="w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
      {/* カンマで区切られたdescriptionを改行で表示 */}
      <p className="mt-12">
        <span className="font-bold">概要:</span>
        <br />
        {descriptionLines.map((line, index) => (
          <span key={index}>
            {line}
            <br />
          </span>
        ))}
      </p>

      <p className="mt-4">
        <span className="font-bold">GitHub URL:</span>{' '}
        <a href={githubUrl}>{githubUrl}</a>
      </p>

      <p className="mt-4">
        <span className="font-bold">
          使用した言語、フレームワークなど:
        </span>{' '}
        {usedTechnologies}
      </p>
    </>
  );
};

export default Post;
