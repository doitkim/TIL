# 학습 내용

## MessagesModule => [PIPE -> [DTO] -> MessagesController -> MessagesService -> MessagesRepository]

- /messages

## [Nest-CLI](https://docs.nestjs.com/cli/overview)

## 유효성 검사 적용 ([class-validator](https://github.com/typestack/class-validator),[class-tranformer](https://github.com/typestack/class-transformer))

```
import { NestFactory } from '@nestjs/core';
import { MessagesModule } from './messages/messages.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(MessagesModule);
  // 애플리케이션 전역에 유효성 검사하도록 글로벌 파이프 적용
  // class-validator class-transformer 설치
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();

```

## dtos 폴더 및 DTO (Data Transfer Object) 파일 생성 후 적용

```
import { IsString } from 'class-validator';

export class CreateMessageDto {
  @IsString()
  content: string;
}

```

```
  // Create Message
  @Post()
  createMessages(@Body() body: CreateMessageDto) {
    console.log(body);
  }

```

## Controller, Service, Repository

### Controller

- 클라이언트의 요청을 받음
- 요청에 대한 처리는 서비스에게 전담
- 클라이언트에게 응답

### Service

- 사용자의 요구사항 처리
- DB 정보가 필요할 때는 Repository에게 전담

### Repository

- DB 관리(연결, 해제, 자원 관리)
- DB CRUD 작업 처리

### Controller와 Service를 구분하는 이유

비즈니스 로직 코드가 컨트롤러에 구현되어 있는 경우 다른 컨트롤러의 핸들러 메소드에서 똑같은 로직 코드를 구현해야 하므로 중복코드가 발생하고 재사용성이 줄어든다.

결론적으로, controller와 service를 구분하면 확장성과 재사용성이 좋아지고 중복코드를 제거할 수 있다는 장점이 있다.

### 중첩과 재사용성이 떨어진 코드라서 APP만들 때 이런 방식으로 작성하지 말 것

```
import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
  messagesService: MessagesService;

  constructor() {
    // Service is creating its own dependencies
    // DON'T DO THIS ON REAL APPS
    this.messagesService = new MessagesService();
  }
  @Get()
  listMessages() {
    return this.messagesService.findAll();
  }

  @Post()
  createMessage(@Body() body: CreateMessageDto) {
    return this.messagesService.create(body.content);
  }

  @Get('/:id')
  getMessage(@Param('id') id: string) {
    return this.messagesService.findOne(id);
  }
}

```

```
import { MessagesRepository } from './messages.repository';

export class MessagesService {
  messagesRepo: MessagesRepository;

  constructor() {
    // Service is creating its own dependencies
    // DON'T DO THIS ON REAL APPS
    this.messagesRepo = new MessagesRepository();
  }

  async findOne(id: string) {
    return this.messagesRepo.findOne(id);
  }

  async findAll() {
    return this.messagesRepo.findAll();
  }

  async create(content: string) {
    return this.messagesRepo.create(content);
  }
}

```

```
import { readFile, writeFile } from 'fs/promises';

export class MessagesRepository {
  async findOne(id: string) {
    const contents = await readFile('message.json', 'utf-8');
    const messages = JSON.parse(contents);
    return messages[id];
  }

  async findAll() {
    const contents = await readFile('message.json', 'utf-8');
    const messages = JSON.parse(contents);
    return messages;
  }

  async create(content: string) {
    const contents = await readFile('message.json', 'utf-8');
    const messages = JSON.parse(contents);

    const id = Math.floor(Math.random() * 999);

    messages[id] = { id, content };

    await writeFile('messages.json', JSON.stringify(messages));
  }
}

```
