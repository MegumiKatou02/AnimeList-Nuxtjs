export interface Manga {
    id: string
    title: string
    coverImage: string
    description: string
    author: string
    releaseYear: number
    rating: number
    status: 'ongoing' | 'completed' | 'hiatus' | 'cancelled'
    genres: string[]
    tags: string[]
    mangaDexId: string
    alternativeTitles?: string[]
    lastUpdated?: string
  }
  
  export interface Tag {
    id: string
    attributes: {
      group: string
      name: {
        en: string
      }
    }
  }
  
  export interface Relationship {
    type: string
    attributes?: {
      fileName?: string
      name?: string
      title?: {
        en?: string
      }
    }
  }
  
  export interface Title {
    [key: string]: string | undefined
    en?: string
    vi?: string
    ja?: string
  }
  
  interface MangaAttributes {
    title: {
      en?: string
      'ja-ro'?: string
      [key: string]: string | undefined
    }
    description: {
      vi?: string
      en?: string
    }
    status: 'ongoing' | 'completed' | 'hiatus' | 'cancelled'
    rating?: {
      average?: number
    }
    tags: Tag[]
    year?: number
    author?: string
    createdAt: string
    lastChapter: string
    altTitles: Title[]
  }
  
  export interface MangaData {
    id: string
    attributes: MangaAttributes
    relationships: Relationship[]
  }
  
  export interface Chapter {
    id: string
    number: string
    volume: string | null
    language: string
    publishedAt: string
    scanlation_group: string
    mangaTitle?: string
    title: string
  }
  
  export interface ChapterData {
    id: string
    attributes: {
      title?: string
      chapter: string
      volume: string
      translatedLanguage: string
      publishAt: string
    }
    relationships: Relationship[]
  }
  
  export interface ChapterPage {
    url: string
    index: number
  }
  
  export interface AdjacentChapters {
    previous: Chapter | null
    next: Chapter | null
  }
  
  export interface ChapterResponse {
    data: {
      id: string
      attributes: {
        chapter: string
        volume: string | null
        publishAt: string
        pages: number
        translatedLanguage: string
        title: string
      }
      relationships: Array<{
        type: string
        id: string
        attributes?: {
          name?: string
        }
      }>
    }[]
  }
  
  export interface TranslationTeam {
    id: string
    name: string
    language: string
  }
  
  export interface ApiChapter {
    id: string
    attributes: {
      chapter: string
      title?: string
      publishAt: string
    }
    relationships: ApiRelationship[]
  }
  
  interface ApiRelationship {
    id: string
    type: string
  }
  
  export interface ApiTranslationTeam {
    id: string
    attributes: {
      name: string
      language?: string
    }
  }