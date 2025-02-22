type AnnouncementRowKeys = 'uuid' | 'meta:title:en' | 'meta:title:zh-TW' | 'meta:description:en' | 'meta:description:zh-TW' | 'content:en' | 'content:zh-TW'
export type AnnouncementRow = Record<AnnouncementRowKeys, string>

type CommunityRowKeys = 'id' | 'name:en' | 'name:zh-TW' | 'intro:en' | 'intro:zh-TW' | 'link' | 'image' | 'canPublish'
export type CommunityRow = {
  [K in CommunityRowKeys]: K extends 'canPublish'
      ? 'Y' | 'N'
      : string;
}

export type SponsorLevelTuple = ['titanium', 'diamond', 'co-organizer', 'gold', 'bronze', 'silver', 'special-thanks', 'friend']
export type SponsorLevel = SponsorLevelTuple[number]
type SponsorLevelRowKeys = 'level' | 'basicWeight'
export type SponsorLevelRow = {
  [K in SponsorLevelRowKeys]: K extends 'level' ? SponsorLevel : string;
}

type SponsorRowKeys = 'id' | 'level' | 'name:en' | 'name:zh-TW' | 'intro:en' | 'intro:zh-TW' | 'link' | 'image' | 'canPublish'
export type SponsorRow = {
  [K in SponsorRowKeys]: K extends 'level'
    ? SponsorLevel
    : K extends 'canPublish'
      ? 'Y' | 'N' | 'P'
      : string;
}

type SponsorNewsRowKeys = 'sponsorId' | 'newsId' | 'description' | 'link' | 'image:vertical' | 'image:horizontal' | 'specialWeight' | 'canPublish'
export type SponsorNewsRow = {
  [K in SponsorNewsRowKeys]: K extends 'canPublish'
    ? 'Y' | 'N'
    : string;
}

type YoutubeRowKeys = 'room' | 'link'
export type YoutubeRow = Record<YoutubeRowKeys, string>

export type SheetName = 'announcement' | 'community' | 'sponsorLevel' | 'sponsor' | 'sponsorNews' | 'youtube'
export type SheetIdMap = Record<SheetName, string>

export type SheetRow<N extends SheetName> = N extends 'announcement'
  ? AnnouncementRow
  : N extends 'sponsorLevel'
    ? SponsorLevelRow
    : N extends 'sponsor'
      ? SponsorRow
      : N extends 'sponsorNews'
        ? SponsorNewsRow
        : N extends 'youtube'
          ? YoutubeRow
          : never
