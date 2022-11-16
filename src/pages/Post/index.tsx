import React from "react";
import styles from "./Post.module.css";

const Post = () => {
  return (
    <>
      <h1>2022년 11월 1일</h1>
      <div className={styles.meal}>
        <h2>식사</h2>
        <table>
          <tr>
            <th>아침</th>
            <th>점심</th>
            <th>저녁</th>
            <th>그 외</th>
          </tr>
          <tr>
            <td>보충제 1스쿱</td>
            <td>라면, 참치김밥</td>
            <td>닭가슴살, 김치, 밥, 된장국</td>
            <td>커피, 빼뺴로</td>
          </tr>
        </table>
      </div>
      <div className={styles.exercise}>
        <h2>운동</h2>
        <div>총 시간 : 1시간 30분</div>
        <table>
          <tr>
            <th>운동 명</th>
            <th>중량</th>
            <th>횟수</th>
            <th>세트 수</th>
          </tr>
          <tr>
            <td>케이블 풀 오버(등)</td>
            <td>35</td>
            <td>12</td>
            <td>4</td>
          </tr>
          <tr>
            <td>풀업(등)</td>
            <td>0</td>
            <td>10</td>
            <td>4</td>
          </tr>
          <tr>
            <td>시티드 로우(등)</td>
            <td>60</td>
            <td>10</td>
            <td>4</td>
          </tr>
          <tr>
            <td>랫 풀 다운(등)</td>
            <td>50</td>
            <td>10</td>
            <td>4</td>
          </tr>
          <tr>
            <td>팩 덱 플라이(가슴)</td>
            <td>35</td>
            <td>12</td>
            <td>4</td>
          </tr>
          <tr>
            <td>덤벨 프레스(가슴)</td>
            <td>44</td>
            <td>10</td>
            <td>4</td>
          </tr>
          <tr>
            <td>인클라인 바벨 프레스(가슴)</td>
            <td>40</td>
            <td>10</td>
            <td>4</td>
          </tr>
          <tr>
            <td>체스트 프레스 머신(가슴)</td>
            <td>40</td>
            <td>10</td>
            <td>4</td>
          </tr>
          <tr>
            <td>케이블 푸쉬 다운 바(삼두)</td>
            <td>35</td>
            <td>10</td>
            <td>4</td>
          </tr>
          <tr>
            <td>케이블 프레스 다운 로프(삼두)</td>
            <td>35</td>
            <td>10</td>
            <td>4</td>
          </tr>
          <tr>
            <td>사이클(유산소)</td>
            <td>0</td>
            <td>30</td>
            <td>0</td>
          </tr>
        </table>
      </div>
    </>
  );
};

export default Post;
