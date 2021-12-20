wait(0.5);
local l__LocalPlayer__1 = game.Players.LocalPlayer;
local l__Humanoid__2 = l__LocalPlayer__1.Character.Humanoid;
local l__Parent__3 = script.Parent;
local l__mouse__4 = l__LocalPlayer__1:GetMouse();
local u1 = l__Humanoid__2:LoadAnimation(l__Parent__3.Idle);
l__Parent__3.Equipped:connect(function()
	u1:Play();
end);
l__Parent__3.Unequipped:connect(function()
	u1:Stop();
end);
local u2 = true;
l__Parent__3.Activated:connect(function()
	if not u2 then
		return;
	end;
	if l__Parent__3.Reloader.Value == true then
		l__Parent__3.Click:FireServer();
		return;
	end;
	u2 = false;
	local v5 = l__Humanoid__2:LoadAnimation(l__Parent__3.Fires);
	l__Parent__3.Shoot:FireServer(l__mouse__4.Hit);
	v5:Play(0.1, 1, 2);
	wait(0.33);
	u2 = true;
end);
