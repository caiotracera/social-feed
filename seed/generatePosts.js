import { faker } from '@faker-js/faker';
import { writeFile } from 'fs/promises';
import { resolve } from 'path';

function generateAuthor() {
  return {
    id: faker.string.uuid(),
    name: faker.person.fullName(),
    role: faker.person.jobTitle(),
    avatar_url: faker.image.avatar(),
  };
}

function generatePost() {
  return {
    id: faker.string.uuid(),
    author: generateAuthor(),
    publishedAt: faker.date.recent(),
    content: faker.lorem.paragraphs({ min: 1, max: 10 }, '\n\n'),
    comments: [],
  };
}

function generateComment(refDate) {
  return {
    id: faker.string.uuid(),
    author: generateAuthor(),
    publishedAt: faker.date.recent({ refDate }),
    content: faker.lorem.paragraph(),
    likes: faker.number.int({ min: 0, max: 100 }),
  };
}

function seed() {
  const posts = [];
  const quantityOfPosts = faker.number.int({ min: 1, max: 10 });

  for (let i = 0; i < quantityOfPosts; i++) {
    const post = generatePost();

    const quantityOfComments = faker.number.int({ min: 1, max: 10 });

    for (let j = 0; j < quantityOfComments; j++) {
      const comment = generateComment(post.publishedAt);

      post.comments.push(comment);
    }

    posts.push(post);
  }

  return posts;
}

async function saveSeed(seed) {
  const path = resolve('./src/mocks/posts.json');

  await writeFile(path, JSON.stringify(seed, null, 2));
}

const posts = seed();
saveSeed(posts);
