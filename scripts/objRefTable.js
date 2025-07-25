const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Eponesh_GameScore,
		C3.Plugins.Sprite,
		C3.Behaviors.DragnDrop,
		C3.Plugins.Text,
		C3.Plugins.Touch,
		C3.Behaviors.Anchor,
		C3.Behaviors.solid,
		C3.Plugins.EMI_INDO_LogMessage,
		C3.Plugins.Audio,
		C3.Plugins.Browser,
		C3.Plugins.Keyboard,
		C3.Behaviors.Timer,
		C3.Behaviors.Sin,
		C3.Plugins.GamePush_Channels,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.System.Acts.SetVar,
		C3.Plugins.Eponesh_GameScore.Exps.PlayerGet,
		C3.Plugins.System.Acts.WaitForPreviousActions,
		C3.JavaScriptInEvents.главноеменюсобытия_Event2_Act3,
		C3.Plugins.System.Acts.Wait,
		C3.JavaScriptInEvents.главноеменюсобытия_Event3_Act1,
		C3.Plugins.System.Cnds.Compare,
		C3.Plugins.System.Cnds.CompareVar,
		C3.JavaScriptInEvents.главноеменюсобытия_Event4_Act1,
		C3.Plugins.Eponesh_GameScore.Acts.PlayerSet,
		C3.Plugins.Eponesh_GameScore.Acts.PlayerSync,
		C3.Plugins.GamePush_Channels.Acts.SendFeedMessage,
		C3.Behaviors.DragnDrop.Cnds.OnDragStart,
		C3.Plugins.Sprite.Acts.SetInstanceVar,
		C3.Plugins.Sprite.Exps.X,
		C3.Plugins.Sprite.Exps.Y,
		C3.Behaviors.DragnDrop.Cnds.IsDragging,
		C3.Plugins.System.Acts.Scroll,
		C3.Plugins.System.Exps.scrollx,
		C3.Plugins.System.Exps.scrolly,
		C3.Plugins.Sprite.Acts.SetPos,
		C3.Plugins.Touch.Cnds.OnTouchObject,
		C3.Plugins.System.Acts.GoToLayout,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.Eponesh_GameScore.Exps.PlayerID,
		C3.Plugins.Eponesh_GameScore.Acts.AdsShowRewarded,
		C3.Plugins.Eponesh_GameScore.Cnds.OnAdsRewardedReward,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.Eponesh_GameScore.Acts.LeaderboardSetRecord,
		C3.Plugins.Eponesh_GameScore.Acts.LeaderboardPublishRecord,
		C3.Plugins.EMI_INDO_LogMessage.Acts.logMessage,
		C3.Plugins.Touch.Cnds.OnTapGestureObject,
		C3.Plugins.Audio.Acts.StopAll,
		C3.Plugins.Audio.Acts.Stop,
		C3.Plugins.Sprite.Acts.AddRemoveAnimation,
		C3.Plugins.System.Acts.NextPrevLayout,
		C3.Plugins.System.Acts.SubVar,
		C3.Plugins.Sprite.Acts.SetVisible,
		C3.Plugins.Text.Acts.SetVisible,
		C3.Plugins.System.Cnds.Every,
		C3.Plugins.Sprite.Acts.SetWidth,
		C3.Plugins.Sprite.Exps.Width,
		C3.Plugins.Sprite.Cnds.IsVisible,
		C3.Plugins.System.Acts.SetLayerVisible,
		C3.Behaviors.Timer.Acts.StartTimer,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.Sprite.Acts.SetAnimFrame,
		C3.Plugins.System.Exps.random,
		C3.Plugins.Sprite.Exps.AnimationFrameCount,
		C3.Plugins.Sprite.Cnds.IsBoolInstanceVarSet,
		C3.Plugins.Sprite.Acts.SetY,
		C3.Plugins.System.Exps.dt,
		C3.Plugins.Sprite.Cnds.CompareY,
		C3.Plugins.System.Exps.viewportbottom,
		C3.Plugins.Sprite.Exps.Height,
		C3.Plugins.Keyboard.Cnds.IsKeyDown,
		C3.Plugins.Sprite.Acts.SetX,
		C3.Plugins.Sprite.Acts.AddInstanceVar,
		C3.Plugins.Sprite.Cnds.CompareInstanceVar,
		C3.Behaviors.Timer.Cnds.OnTimer,
		C3.Plugins.System.Acts.CreateObject,
		C3.Plugins.System.Exps.int,
		C3.Plugins.Sprite.Acts.SetAngle,
		C3.Plugins.Sprite.Cnds.IsOverlapping,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.Sprite.Acts.Spawn,
		C3.Plugins.Eponesh_GameScore.Acts.AdsShowFullscreen,
		C3.Plugins.Eponesh_GameScore.Acts.PlayerAdd,
		C3.Plugins.Text.Acts.Destroy,
		C3.Plugins.Eponesh_GameScore.Acts.LeaderboardFetchScoped,
		C3.Plugins.Eponesh_GameScore.Cnds.OnLeaderboardFetch,
		C3.Plugins.Eponesh_GameScore.Cnds.LeaderboardEachPlayer,
		C3.Plugins.Eponesh_GameScore.Exps.LeaderboardCurPlayerIndex,
		C3.Plugins.Eponesh_GameScore.Exps.LeaderboardCurPlayerPosition,
		C3.Plugins.Eponesh_GameScore.Exps.LeaderboardCurPlayerName,
		C3.Plugins.Eponesh_GameScore.Exps.LeaderboardCurPlayerField,
		C3.Plugins.Browser.Acts.GoToURL,
		C3.Plugins.System.Cnds.OnLoadFinished,
		C3.Plugins.GamePush_Channels.Acts.FetchFeedMessages,
		C3.Plugins.GamePush_Channels.Cnds.OnFeedMessagesFetch,
		C3.Plugins.GamePush_Channels.Cnds.EachMessage,
		C3.Plugins.GamePush_Channels.Acts.DeleteMessage,
		C3.Plugins.GamePush_Channels.Exps.CurMessageID,
		C3.JavaScriptInEvents.Refсобытия_Event15_Act1
	];
};
self.C3_JsPropNameTable = [
	{GamePush: 0},
	{startX: 0},
	{startY: 0},
	{Перетаскивание: 0},
	{scroll: 0},
	{Фон: 0},
	{Автосалон: 0},
	{СТО: 0},
	{Таксопарк: 0},
	{Заправка: 0},
	{Гараж: 0},
	{Табличка1: 0},
	{Табличка2: 0},
	{Табличка3: 0},
	{КнопкаКарта: 0},
	{Карта: 0},
	{Реферал: 0},
	{Рефералы: 0},
	{Кошель: 0},
	{Кошелек: 0},
	{INFO: 0},
	{Информация: 0},
	{ФонСалон: 0},
	{РазделительнаяЧертаВерх: 0},
	{НадписьАвтосалон: 0},
	{СкоростьДохода: 0},
	{МощностьЛС: 0},
	{ПотреблениеТоплива: 0},
	{РазделительнаяЧерта: 0},
	{КупитьТачу1: 0},
	{НадписьКупитьMINIFOR: 0},
	{СкоростьДохода2: 0},
	{МощностьЛС2: 0},
	{ПотреблениеТоплива2: 0},
	{КупитьТачу2: 0},
	{НадписьКупитьSOLDON: 0},
	{СкоростьДохода3: 0},
	{МощностьЛС3: 0},
	{ПотреблениеТоплива3: 0},
	{КупитьТачу3: 0},
	{НадписьКупитьSPRUT: 0},
	{КнопкаМеню: 0},
	{НадписьМеню: 0},
	{КнопкаOKOS: 0},
	{Touch: 0},
	{НадписьOKOS: 0},
	{КнопкаLOVON: 0},
	{НадписьLOVON: 0},
	{КнопкаNEXT: 0},
	{НадписьNEXT: 0},
	{СлотOKOS1: 0},
	{LOVON1: 0},
	{LOVON2: 0},
	{LOVON3: 0},
	{Bought: 0},
	{OKOS1: 0},
	{OKOS2: 0},
	{OKOS3: 0},
	{ФонСТО: 0},
	{ЗданиеСТО: 0},
	{ИконкаСтоимостиРемонта: 0},
	{ИконкаСвободныхСлотов: 0},
	{ИконкаЗанятыхСлотов: 0},
	{УскоритьРемонт: 0},
	{ТекстУскоритьРемонт: 0},
	{Черта: 0},
	{Пометки: 0},
	{МестоПодOKOS1: 0},
	{МестоПодOKOS2: 0},
	{МестоПодOKOS3: 0},
	{Пометки2: 0},
	{СлотLOVON1: 0},
	{СлотLOVON2: 0},
	{СлотLOVON3: 0},
	{НадписьСТО: 0},
	{ФонТаксопарка: 0},
	{ЧертаТаксы: 0},
	{ТаксопаркНадпись: 0},
	{ЗданиеТаксопарк: 0},
	{РасходТоплива: 0},
	{ВремяРаботыВРейсе: 0},
	{ДоходВРейсе: 0},
	{СлотТаксопарк1: 0},
	{Anchor: 0},
	{СлотТаксопарк5: 0},
	{СлотТаксопарк4: 0},
	{ДоходТаксыВЧас: 0},
	{НадписьДоходТаксыВЧас: 0},
	{НадписьВремяРаботыВрейсе: 0},
	{НадписьРасходаТопливаВЧас: 0},
	{НадписьРасходаТопливаВРейсе: 0},
	{КнопкаОтправитьВРейс: 0},
	{НадписьОтправитьВРейс: 0},
	{КнопкаАвтосалон: 0},
	{КнопкаНазадтаксопарк: 0},
	{НадписьНазад: 0},
	{ID: 0},
	{ИнфоИвента: 0},
	{НомерСезона: 0},
	{СрокСезона: 0},
	{ПризовойФондНадпись: 0},
	{ПризUSDTНадпись: 0},
	{ПризTDTНадпись: 0},
	{НадписьКоличестваПризовыхМест: 0},
	{НадписьКоличетсваПризёров: 0},
	{КнопкаТаблицаЛидеров: 0},
	{Лидерборд: 0},
	{ОтветыНаВопросыКнопка: 0},
	{ОтветыНаВопросыНадпись: 0},
	{ЗаданияКнопка: 0},
	{КнопкаНазад: 0},
	{НадписьНаГлавныйЭкран: 0},
	{НадписьЗадания: 0},
	{MINIFOR: 0},
	{СкоростьMinifor: 0},
	{ДоходMINIFORвЧас: 0},
	{SOLDON: 0},
	{ДоходSPRUTвЧас: 0},
	{СкоростьSPRUT: 0},
	{РасходТопливаSPRUT: 0},
	{НадписьКупитьKARAL: 0},
	{KARAL: 0},
	{ДоходKARALвЧас: 0},
	{ДоходVOVIAS4x4вЧас: 0},
	{ДоходKARALвЧас3: 0},
	{VOVIAS4x4: 0},
	{НадписьКупитьVOVIAS4x4: 0},
	{СкоростьVOVIAS4x4вЧас: 0},
	{РасходТопливаVOVIAS4x4ВЧас: 0},
	{MINOR: 0},
	{РасходТопливаMINORВЧас: 0},
	{СкоростьMINORвЧас: 0},
	{ДоходMINORвЧас: 0},
	{РасходТопливаKARALВЧас2: 0},
	{СкоростьKARALвЧас: 0},
	{НадписьDR: 0},
	{DriveToken: 0},
	{SPRUT: 0},
	{РасходТопливаMINIFOR: 0},
	{ДоходSOLDONвЧас: 0},
	{СкоростьSOLDON: 0},
	{РасходТопливаSOLDON: 0},
	{Solid: 0},
	{Road55: 0},
	{Dir: 0},
	{lane: 0},
	{speed: 0},
	{dist: 0},
	{Car55: 0},
	{НадписьКупитьMINOR: 0},
	{СлотТаксопарк6: 0},
	{LogMessage: 0},
	{"50DR_rewardedtext": 0},
	{car1: 0},
	{car2: 0},
	{car3: 0},
	{car4: 0},
	{car5: 0},
	{car6: 0},
	{car1oil_bg: 0},
	{tag: 0},
	{car1oil_text: 0},
	{InitialWidth1: 0},
	{car1oil_bar: 0},
	{car1_refuel: 0},
	{car1refuel_text: 0},
	{car2oil_bg: 0},
	{InitialWidth2: 0},
	{car2oil_bar: 0},
	{car2_refuel: 0},
	{car2oil_text: 0},
	{car2refuel_text: 0},
	{car3oil_bg: 0},
	{InitialWidth3: 0},
	{car3oil_bar: 0},
	{car3_refuel: 0},
	{car3refuel_text: 0},
	{car3oil_text: 0},
	{car4oil_bg: 0},
	{InitialWidth4: 0},
	{car4oil_bar: 0},
	{car4_refuel: 0},
	{car4refuel_text: 0},
	{car4oil_text: 0},
	{car5oil_bg: 0},
	{InitialWidth5: 0},
	{car5oil_bar: 0},
	{car5_refuel: 0},
	{car5refuel_text: 0},
	{car5oil_text: 0},
	{car6oil_bg: 0},
	{InitialWidth6: 0},
	{car6oil_bar: 0},
	{car6_refuel: 0},
	{car6oil_text: 0},
	{car6refuel_text: 0},
	{car1_health: 0},
	{car2_health: 0},
	{car3_health: 0},
	{car4_health: 0},
	{car5_health: 0},
	{car6_health: 0},
	{sendsto: 0},
	{stotime: 0},
	{Leaders_text: 0},
	{playeravatarleaders: 0},
	{playerindexleader: 0},
	{playerinfoleaders: 0},
	{Leaders_info1: 0},
	{Leaders_info2: 0},
	{КнопкаGO: 0},
	{TextGo: 0},
	{ФонЗаправки: 0},
	{ЗданиеЗаправка: 0},
	{ЦенаЗаЕдиницуТоплива: 0},
	{ИконкаРасхода: 0},
	{ИконкаКоличестваТоплива: 0},
	{КнопкаОплаты: 0},
	{НадписьЗаправка: 0},
	{НадписьКупить: 0},
	{НадписьЦенаЗаединицуТоплива: 0},
	{НадписьРасход: 0},
	{НадписьКоличестваТоплива: 0},
	{ButtonBack: 0},
	{TextBack: 0},
	{ButtonMenu: 0},
	{TextMenu: 0},
	{ButtonRU: 0},
	{ButtonEN: 0},
	{TextRU: 0},
	{TextEn: 0},
	{ButtonEN2: 0},
	{TextFAQRU1: 0},
	{ButonBack: 0},
	{ТекстBack: 0},
	{TextFAQEN: 0},
	{ЗаданияКнопка2: 0},
	{КнопкаПроверка1: 0},
	{TextTask1: 0},
	{НадписьГотово: 0},
	{КнопкаЗадание2: 0},
	{TextTask2: 0},
	{КнопкаПроверка2: 0},
	{НадписьГотово2: 0},
	{КнопкаЗадание3: 0},
	{TextTask3: 0},
	{КнопкаПроверка3: 0},
	{НадписьГотово3: 0},
	{КнопкаЗадание4: 0},
	{TextTask4: 0},
	{КнопкаПроверка4: 0},
	{НадписьГотово4: 0},
	{TextSuccess: 0},
	{Аудио: 0},
	{Money: 0},
	{Browser: 0},
	{Keyboard: 0},
	{txtScore: 0},
	{Road: 0},
	{Player: 0},
	{roadSpeed: 0},
	{roadSpeedMod: 0},
	{Score: 0},
	{Crashed: 0},
	{Timer: 0},
	{glob: 0},
	{Explosion: 0},
	{Car: 0},
	{txtScore2: 0},
	{goleft: 0},
	{goright: 0},
	{Gameovertext: 0},
	{Sine: 0},
	{Sine2: 0},
	{loading_bar: 0},
	{НадписьREF: 0},
	{ТекстИграйтеВместе: 0},
	{ТекстИграйтеВместе2: 0},
	{ФонДляСсылки: 0},
	{РефСсылка: 0},
	{КнопкаПригласить: 0},
	{НадписьПригласить: 0},
	{ТвоиРефералы: 0},
	{ПервыйУровень: 0},
	{количествоРефов1: 0},
	{ВторойУровень: 0},
	{ТретийУровень: 0},
	{количествоРефов2: 0},
	{количествоРефов3: 0},
	{ИнфоОНаградезаРефов: 0},
	{ДоходСРефа: 0},
	{цифрыдоходасрефа: 0},
	{надписьdrive: 0},
	{фото: 0},
	{GamePushChannels: 0},
	{Якорь: 0},
	{Mute: 0},
	{txtusdt: 0},
	{USDTICON: 0},
	{WALLET: 0},
	{НадписьUSDT: 0},
	{МинималкаНадпись: 0},
	{КнопкаВопрос: 0},
	{НадписьВопрос: 0},
	{ПодробнееНадпись: 0},
	{USDT: 0},
	{ButtonTDT: 0},
	{TextDRIVE: 0},
	{USDTToken: 0},
	{Referral_level1: 0},
	{Referral_level2: 0},
	{Referral_level3: 0},
	{check_if_registered: 0},
	{referral_earndr: 0},
	{MINIFOR_oil: 0},
	{Minifor_health: 0},
	{SOLDON_oil: 0},
	{Soldon_health: 0},
	{SPRUT_oil: 0},
	{Sprut_health: 0},
	{MINOR_oil: 0},
	{Minor_health: 0},
	{VOVIAS4X4: 0},
	{VOVIAS4X4_oil: 0},
	{Vovias4x4_health: 0},
	{KARAL_oil: 0},
	{Karal_health: 0},
	{all_profit: 0},
	{all_oil: 0},
	{send_status: 0},
	{get_timer: 0},
	{Stosend_status: 0},
	{Sto_timer: 0},
	{have_sto: 0},
	{tLane: 0},
	{Distance_m: 0},
	{DR_ingame: 0},
	{US_ingame: 0},
	{gamestart: 0},
	{task1_status: 0},
	{task2_status: 0},
	{task3_status: 0},
	{task4_status: 0},
	{player_id: 0},
	{ref_link: 0},
	{parent_candidate: 0},
	{plyid: 0}
];

self.InstanceType = {
	GamePush: class extends C3.Plugins.Eponesh_GameScore.Instance {},
	scroll: class extends self.ISpriteInstance {},
	Фон: class extends self.ISpriteInstance {},
	Автосалон: class extends self.ISpriteInstance {},
	СТО: class extends self.ISpriteInstance {},
	Таксопарк: class extends self.ISpriteInstance {},
	Заправка: class extends self.ISpriteInstance {},
	Гараж: class extends self.ISpriteInstance {},
	Табличка1: class extends self.ISpriteInstance {},
	Табличка2: class extends self.ISpriteInstance {},
	Табличка3: class extends self.ISpriteInstance {},
	КнопкаКарта: class extends self.ISpriteInstance {},
	Карта: class extends self.ITextInstance {},
	Реферал: class extends self.ITextInstance {},
	Рефералы: class extends self.ISpriteInstance {},
	Кошель: class extends self.ITextInstance {},
	Кошелек: class extends self.ISpriteInstance {},
	INFO: class extends self.ITextInstance {},
	Информация: class extends self.ISpriteInstance {},
	ФонСалон: class extends self.ISpriteInstance {},
	РазделительнаяЧертаВерх: class extends self.ISpriteInstance {},
	НадписьАвтосалон: class extends self.ITextInstance {},
	СкоростьДохода: class extends self.ISpriteInstance {},
	МощностьЛС: class extends self.ISpriteInstance {},
	ПотреблениеТоплива: class extends self.ISpriteInstance {},
	РазделительнаяЧерта: class extends self.ISpriteInstance {},
	КупитьТачу1: class extends self.ISpriteInstance {},
	НадписьКупитьMINIFOR: class extends self.ITextInstance {},
	СкоростьДохода2: class extends self.ISpriteInstance {},
	МощностьЛС2: class extends self.ISpriteInstance {},
	ПотреблениеТоплива2: class extends self.ISpriteInstance {},
	КупитьТачу2: class extends self.ISpriteInstance {},
	НадписьКупитьSOLDON: class extends self.ITextInstance {},
	СкоростьДохода3: class extends self.ISpriteInstance {},
	МощностьЛС3: class extends self.ISpriteInstance {},
	ПотреблениеТоплива3: class extends self.ISpriteInstance {},
	КупитьТачу3: class extends self.ISpriteInstance {},
	НадписьКупитьSPRUT: class extends self.ITextInstance {},
	КнопкаМеню: class extends self.ISpriteInstance {},
	НадписьМеню: class extends self.ITextInstance {},
	КнопкаOKOS: class extends self.ISpriteInstance {},
	Touch: class extends self.IInstance {},
	НадписьOKOS: class extends self.ITextInstance {},
	КнопкаLOVON: class extends self.ISpriteInstance {},
	НадписьLOVON: class extends self.ITextInstance {},
	КнопкаNEXT: class extends self.ISpriteInstance {},
	НадписьNEXT: class extends self.ITextInstance {},
	СлотOKOS1: class extends self.ISpriteInstance {},
	LOVON1: class extends self.ISpriteInstance {},
	LOVON2: class extends self.ISpriteInstance {},
	LOVON3: class extends self.ISpriteInstance {},
	OKOS1: class extends self.ISpriteInstance {},
	OKOS2: class extends self.ISpriteInstance {},
	OKOS3: class extends self.ISpriteInstance {},
	ФонСТО: class extends self.ISpriteInstance {},
	ЗданиеСТО: class extends self.ISpriteInstance {},
	ИконкаСтоимостиРемонта: class extends self.ISpriteInstance {},
	ИконкаСвободныхСлотов: class extends self.ISpriteInstance {},
	ИконкаЗанятыхСлотов: class extends self.ISpriteInstance {},
	УскоритьРемонт: class extends self.ISpriteInstance {},
	ТекстУскоритьРемонт: class extends self.ITextInstance {},
	Черта: class extends self.ISpriteInstance {},
	Пометки: class extends self.ISpriteInstance {},
	МестоПодOKOS1: class extends self.ISpriteInstance {},
	МестоПодOKOS2: class extends self.ISpriteInstance {},
	МестоПодOKOS3: class extends self.ISpriteInstance {},
	Пометки2: class extends self.ISpriteInstance {},
	СлотLOVON1: class extends self.ISpriteInstance {},
	СлотLOVON2: class extends self.ISpriteInstance {},
	СлотLOVON3: class extends self.ISpriteInstance {},
	НадписьСТО: class extends self.ITextInstance {},
	ФонТаксопарка: class extends self.ISpriteInstance {},
	ЧертаТаксы: class extends self.ISpriteInstance {},
	ТаксопаркНадпись: class extends self.ITextInstance {},
	ЗданиеТаксопарк: class extends self.ISpriteInstance {},
	РасходТоплива: class extends self.ISpriteInstance {},
	ВремяРаботыВРейсе: class extends self.ISpriteInstance {},
	ДоходВРейсе: class extends self.ISpriteInstance {},
	СлотТаксопарк1: class extends self.ISpriteInstance {},
	СлотТаксопарк5: class extends self.ISpriteInstance {},
	СлотТаксопарк4: class extends self.ISpriteInstance {},
	ДоходТаксыВЧас: class extends self.ITextInstance {},
	НадписьДоходТаксыВЧас: class extends self.ITextInstance {},
	НадписьВремяРаботыВрейсе: class extends self.ITextInstance {},
	НадписьРасходаТопливаВЧас: class extends self.ITextInstance {},
	НадписьРасходаТопливаВРейсе: class extends self.ITextInstance {},
	КнопкаОтправитьВРейс: class extends self.ISpriteInstance {},
	НадписьОтправитьВРейс: class extends self.ITextInstance {},
	КнопкаАвтосалон: class extends self.ISpriteInstance {},
	КнопкаНазадтаксопарк: class extends self.ISpriteInstance {},
	НадписьНазад: class extends self.ITextInstance {},
	ID: class extends self.ITextInstance {},
	ИнфоИвента: class extends self.ISpriteInstance {},
	НомерСезона: class extends self.ITextInstance {},
	СрокСезона: class extends self.ITextInstance {},
	ПризовойФондНадпись: class extends self.ITextInstance {},
	ПризUSDTНадпись: class extends self.ITextInstance {},
	ПризTDTНадпись: class extends self.ITextInstance {},
	НадписьКоличестваПризовыхМест: class extends self.ITextInstance {},
	НадписьКоличетсваПризёров: class extends self.ITextInstance {},
	КнопкаТаблицаЛидеров: class extends self.ISpriteInstance {},
	Лидерборд: class extends self.ITextInstance {},
	ОтветыНаВопросыКнопка: class extends self.ISpriteInstance {},
	ОтветыНаВопросыНадпись: class extends self.ITextInstance {},
	ЗаданияКнопка: class extends self.ISpriteInstance {},
	КнопкаНазад: class extends self.ISpriteInstance {},
	НадписьНаГлавныйЭкран: class extends self.ITextInstance {},
	НадписьЗадания: class extends self.ITextInstance {},
	MINIFOR: class extends self.ITextInstance {},
	СкоростьMinifor: class extends self.ITextInstance {},
	ДоходMINIFORвЧас: class extends self.ITextInstance {},
	SOLDON: class extends self.ITextInstance {},
	ДоходSPRUTвЧас: class extends self.ITextInstance {},
	СкоростьSPRUT: class extends self.ITextInstance {},
	РасходТопливаSPRUT: class extends self.ITextInstance {},
	НадписьКупитьKARAL: class extends self.ITextInstance {},
	KARAL: class extends self.ITextInstance {},
	ДоходKARALвЧас: class extends self.ITextInstance {},
	ДоходVOVIAS4x4вЧас: class extends self.ITextInstance {},
	ДоходKARALвЧас3: class extends self.ITextInstance {},
	VOVIAS4x4: class extends self.ITextInstance {},
	НадписьКупитьVOVIAS4x4: class extends self.ITextInstance {},
	СкоростьVOVIAS4x4вЧас: class extends self.ITextInstance {},
	РасходТопливаVOVIAS4x4ВЧас: class extends self.ITextInstance {},
	MINOR: class extends self.ITextInstance {},
	РасходТопливаMINORВЧас: class extends self.ITextInstance {},
	СкоростьMINORвЧас: class extends self.ITextInstance {},
	ДоходMINORвЧас: class extends self.ITextInstance {},
	РасходТопливаKARALВЧас2: class extends self.ITextInstance {},
	СкоростьKARALвЧас: class extends self.ITextInstance {},
	НадписьDR: class extends self.ITextInstance {},
	DriveToken: class extends self.ITextInstance {},
	SPRUT: class extends self.ITextInstance {},
	РасходТопливаMINIFOR: class extends self.ITextInstance {},
	ДоходSOLDONвЧас: class extends self.ITextInstance {},
	СкоростьSOLDON: class extends self.ITextInstance {},
	РасходТопливаSOLDON: class extends self.ITextInstance {},
	Road55: class extends self.ISpriteInstance {},
	Car55: class extends self.ISpriteInstance {},
	НадписьКупитьMINOR: class extends self.ITextInstance {},
	СлотТаксопарк6: class extends self.ISpriteInstance {},
	LogMessage: class extends C3.Plugins.EMI_INDO_LogMessage.Instance {},
	_50DR_rewardedtext: class extends self.ITextInstance {},
	car1: class extends self.ISpriteInstance {},
	car2: class extends self.ISpriteInstance {},
	car3: class extends self.ISpriteInstance {},
	car4: class extends self.ISpriteInstance {},
	car5: class extends self.ISpriteInstance {},
	car6: class extends self.ISpriteInstance {},
	car1oil_bg: class extends self.ISpriteInstance {},
	car1oil_text: class extends self.ITextInstance {},
	car1oil_bar: class extends self.ISpriteInstance {},
	car1_refuel: class extends self.ISpriteInstance {},
	car1refuel_text: class extends self.ITextInstance {},
	car2oil_bg: class extends self.ISpriteInstance {},
	car2oil_bar: class extends self.ISpriteInstance {},
	car2_refuel: class extends self.ISpriteInstance {},
	car2oil_text: class extends self.ITextInstance {},
	car2refuel_text: class extends self.ITextInstance {},
	car3oil_bg: class extends self.ISpriteInstance {},
	car3oil_bar: class extends self.ISpriteInstance {},
	car3_refuel: class extends self.ISpriteInstance {},
	car3refuel_text: class extends self.ITextInstance {},
	car3oil_text: class extends self.ITextInstance {},
	car4oil_bg: class extends self.ISpriteInstance {},
	car4oil_bar: class extends self.ISpriteInstance {},
	car4_refuel: class extends self.ISpriteInstance {},
	car4refuel_text: class extends self.ITextInstance {},
	car4oil_text: class extends self.ITextInstance {},
	car5oil_bg: class extends self.ISpriteInstance {},
	car5oil_bar: class extends self.ISpriteInstance {},
	car5_refuel: class extends self.ISpriteInstance {},
	car5refuel_text: class extends self.ITextInstance {},
	car5oil_text: class extends self.ITextInstance {},
	car6oil_bg: class extends self.ISpriteInstance {},
	car6oil_bar: class extends self.ISpriteInstance {},
	car6_refuel: class extends self.ISpriteInstance {},
	car6oil_text: class extends self.ITextInstance {},
	car6refuel_text: class extends self.ITextInstance {},
	car1_health: class extends self.ITextInstance {},
	car2_health: class extends self.ITextInstance {},
	car3_health: class extends self.ITextInstance {},
	car4_health: class extends self.ITextInstance {},
	car5_health: class extends self.ITextInstance {},
	car6_health: class extends self.ITextInstance {},
	sendsto: class extends self.ISpriteInstance {},
	stotime: class extends self.ITextInstance {},
	Leaders_text: class extends self.ITextInstance {},
	playeravatarleaders: class extends self.ISpriteInstance {},
	playerindexleader: class extends self.ISpriteInstance {},
	playerinfoleaders: class extends self.ISpriteInstance {},
	Leaders_info1: class extends self.ITextInstance {},
	Leaders_info2: class extends self.ITextInstance {},
	КнопкаGO: class extends self.ISpriteInstance {},
	TextGo: class extends self.ITextInstance {},
	ФонЗаправки: class extends self.ISpriteInstance {},
	ЗданиеЗаправка: class extends self.ISpriteInstance {},
	ЦенаЗаЕдиницуТоплива: class extends self.ISpriteInstance {},
	ИконкаРасхода: class extends self.ISpriteInstance {},
	ИконкаКоличестваТоплива: class extends self.ISpriteInstance {},
	КнопкаОплаты: class extends self.ISpriteInstance {},
	НадписьЗаправка: class extends self.ITextInstance {},
	НадписьКупить: class extends self.ITextInstance {},
	НадписьЦенаЗаединицуТоплива: class extends self.ITextInstance {},
	НадписьРасход: class extends self.ITextInstance {},
	НадписьКоличестваТоплива: class extends self.ITextInstance {},
	ButtonBack: class extends self.ISpriteInstance {},
	TextBack: class extends self.ITextInstance {},
	ButtonMenu: class extends self.ISpriteInstance {},
	TextMenu: class extends self.ITextInstance {},
	ButtonRU: class extends self.ISpriteInstance {},
	ButtonEN: class extends self.ISpriteInstance {},
	TextRU: class extends self.ITextInstance {},
	TextEn: class extends self.ITextInstance {},
	ButtonEN2: class extends self.ISpriteInstance {},
	TextFAQRU1: class extends self.ITextInstance {},
	ButonBack: class extends self.ISpriteInstance {},
	ТекстBack: class extends self.ITextInstance {},
	TextFAQEN: class extends self.ITextInstance {},
	ЗаданияКнопка2: class extends self.ISpriteInstance {},
	КнопкаПроверка1: class extends self.ISpriteInstance {},
	TextTask1: class extends self.ITextInstance {},
	НадписьГотово: class extends self.ITextInstance {},
	КнопкаЗадание2: class extends self.ISpriteInstance {},
	TextTask2: class extends self.ITextInstance {},
	КнопкаПроверка2: class extends self.ISpriteInstance {},
	НадписьГотово2: class extends self.ITextInstance {},
	КнопкаЗадание3: class extends self.ISpriteInstance {},
	TextTask3: class extends self.ITextInstance {},
	КнопкаПроверка3: class extends self.ISpriteInstance {},
	НадписьГотово3: class extends self.ITextInstance {},
	КнопкаЗадание4: class extends self.ISpriteInstance {},
	TextTask4: class extends self.ITextInstance {},
	КнопкаПроверка4: class extends self.ISpriteInstance {},
	НадписьГотово4: class extends self.ITextInstance {},
	TextSuccess: class extends self.ITextInstance {},
	Аудио: class extends self.IInstance {},
	Money: class extends self.ISpriteInstance {},
	Browser: class extends self.IInstance {},
	Keyboard: class extends self.IInstance {},
	txtScore: class extends self.ITextInstance {},
	Road: class extends self.ISpriteInstance {},
	Player: class extends self.ISpriteInstance {},
	glob: class extends self.ISpriteInstance {},
	Explosion: class extends self.ISpriteInstance {},
	Car: class extends self.ISpriteInstance {},
	txtScore2: class extends self.ITextInstance {},
	goleft: class extends self.ISpriteInstance {},
	goright: class extends self.ISpriteInstance {},
	Gameovertext: class extends self.ITextInstance {},
	loading_bar: class extends self.ISpriteInstance {},
	НадписьREF: class extends self.ITextInstance {},
	ТекстИграйтеВместе: class extends self.ITextInstance {},
	ТекстИграйтеВместе2: class extends self.ITextInstance {},
	ФонДляСсылки: class extends self.ISpriteInstance {},
	РефСсылка: class extends self.ITextInstance {},
	КнопкаПригласить: class extends self.ISpriteInstance {},
	НадписьПригласить: class extends self.ITextInstance {},
	ТвоиРефералы: class extends self.ITextInstance {},
	ПервыйУровень: class extends self.ITextInstance {},
	количествоРефов1: class extends self.ITextInstance {},
	ВторойУровень: class extends self.ITextInstance {},
	ТретийУровень: class extends self.ITextInstance {},
	количествоРефов2: class extends self.ITextInstance {},
	количествоРефов3: class extends self.ITextInstance {},
	ИнфоОНаградезаРефов: class extends self.ITextInstance {},
	ДоходСРефа: class extends self.ITextInstance {},
	цифрыдоходасрефа: class extends self.ITextInstance {},
	надписьdrive: class extends self.ITextInstance {},
	фото: class extends self.ISpriteInstance {},
	GamePushChannels: class extends C3.Plugins.GamePush_Channels.Instance {},
	Mute: class extends self.ISpriteInstance {},
	txtusdt: class extends self.ITextInstance {},
	USDTICON: class extends self.ISpriteInstance {},
	WALLET: class extends self.ITextInstance {},
	НадписьUSDT: class extends self.ITextInstance {},
	МинималкаНадпись: class extends self.ITextInstance {},
	КнопкаВопрос: class extends self.ISpriteInstance {},
	НадписьВопрос: class extends self.ITextInstance {},
	ПодробнееНадпись: class extends self.ITextInstance {},
	USDT: class extends self.ITextInstance {},
	ButtonTDT: class extends self.ISpriteInstance {},
	TextDRIVE: class extends self.ITextInstance {},
	USDTToken: class extends self.ITextInstance {}
}