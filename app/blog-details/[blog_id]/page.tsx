import React from 'react'
import {
   Container,
   Title,
   Text,
   Image,
   Avatar,
   Group,
   Grid,
   Card,
   SimpleGrid,
   AspectRatio,
} from '@mantine/core'
import { IconCalendar } from '@tabler/icons-react'
import classes from './BlogDetailsPage.module.css'

const relatedArticles = [
   {
      title: 'Exploring the hidden gems of Iceland',
      image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
      date: 'October 10, 2022',
   },
   {
      title: 'A guide to the best hiking trails in the Alps',
      image: 'https://images.unsplash.com/photo-1533312343168-3b8d17e7ed08?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
      date: 'October 15, 2022',
   },
   {
      title: 'Top 5 beaches to visit in the Caribbean',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
      date: 'November 1, 2022',
   },
]

export default function BlogDetailsPage() {
   return (
      <Container size="xl" py="xl">
         <Title align="center" order={1} mb="md">
            Top 10 places to visit in Norway this summer
         </Title>
         <Group position="center" mb="lg">
            <Group>
               <Avatar src="https://via.placeholder.com/40" alt="Author" />
               <Text size="sm">By John Doe</Text>
            </Group>
            <Group>
               <IconCalendar size={16} />
               <Text size="sm">August 18, 2022</Text>
            </Group>
         </Group>
         <Image
            src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80"
            alt="Top 10 places to visit in Norway this summer"
            mb="xl"
         />
         <Text size="md" mb="xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            nec iaculis mauris. Sed eget sollicitudin nisi, in dignissim sem.
            Donec euismod, nisi vel consectetur interdum, nisl felis sodales
            nisl, vitae viverra mauris libero nec neque. Cras finibus tortor
            lectus, a malesuada purus dignissim sed. Suspendisse potenti. Morbi
            viverra metus at lectus vulputate, a ultricies metus ullamcorper.
            Donec dapibus odio libero, sit amet varius nisi viverra vel.
         </Text>
         <Text size="md" mb="xl">
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Integer vitae urna malesuada, fermentum nisl
            a, volutpat dolor. Pellentesque venenatis leo et dui tristique, vel
            facilisis nulla bibendum. Donec vel arcu magna. Praesent non semper
            justo, sit amet volutpat turpis. Maecenas mollis, nunc eu interdum
            facilisis, mauris metus convallis metus, in fermentum metus sapien
            ac lorem. Nulla facilisi. Sed eget nunc id odio vehicula fringilla
            ut a tortor.
         </Text>
         <Title order={2} mb="md">
            Related Articles
         </Title>
         <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="lg">
            {relatedArticles.map((article) => (
               <Card
                  key={article.title}
                  p="md"
                  radius="md"
                  component="a"
                  href={`/blog-details/${article.title}`}
                  className={classes.card}
               >
                  <AspectRatio ratio={1920 / 1080}>
                     <Image src={article.image} alt={article.title} />
                  </AspectRatio>
                  <Text c="dimmed" size="xs" tt="uppercase" fw={700} mt="md">
                     {article.date}
                  </Text>
                  <Text className={classes.title} mt={5}>
                     {article.title}
                  </Text>
               </Card>
            ))}
         </SimpleGrid>
      </Container>
   )
}
