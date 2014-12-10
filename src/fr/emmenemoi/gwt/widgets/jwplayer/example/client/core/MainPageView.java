package fr.emmenemoi.gwt.widgets.jwplayer.example.client.core;

import java.util.ArrayList;

import com.gwtplatform.mvp.client.ViewImpl;
import com.google.gwt.event.dom.client.HasClickHandlers;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.HasValue;
import com.google.gwt.user.client.ui.HTMLPanel;
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.TextBox;
import com.google.gwt.user.client.ui.Widget;
import com.google.inject.Inject;

import fr.emmenemoi.gwt.widgets.jwplayer.client.JWPlayer;
import fr.emmenemoi.gwt.widgets.jwplayer.client.jwplayeroptions.JWPlayerOptions.JWPlayerPlaylistSource;
import fr.emmenemoi.gwt.widgets.jwplayer.client.jwplayeroptions.JWPlayerPlaylistSourceImpl;

public class MainPageView extends ViewImpl implements MainPagePresenter.MyView {

	private static String html = "<h1>Web Application Starter Project</h1>\n"
			+ "<table align=\"center\">\n"
			+ "  <tr>\n"
			+ "    <td colspan=\"3\" style=\"font-weight:bold;\">Please enter your movie URL:</td>\n"
			+ "  </tr>\n"
			+ "  <tr>\n"
			+ "    <td id=\"nameFieldContainer\"></td>\n"
			+ "    <td id=\"sendButtonContainer\"></td>\n"
			+ "    <td id=\"sourcesButtonContainer\"></td>\n"
			+ "    <td id=\"playerContainer\"></td>\n"
			+ "  </tr>\n"
			+ "  <tr>\n"
			+ "    <td colspan=\"3\" style=\"color:red;\" id=\"errorLabelContainer\"></td>\n"
			+ "  </tr>\n" + "</table>\n";
	private final HTMLPanel panel = new HTMLPanel(html);
	private final Label errorLabel;
	private final TextBox nameField;
	private final Button sendButton;
	private final Button sourcesButton;
	private final JWPlayer player;

	@Inject
	public MainPageView() {

		sendButton = new Button("Play URL");
		sourcesButton = new Button("Play Sources");
		nameField = new TextBox();
		nameField.setText("http://content.jwplatform.com/videos/HkauGhRi-640.mp4");
		errorLabel = new Label();
		player = new JWPlayer();

		// We can add style names to widgets
		sendButton.addStyleName("sendButton");
		sourcesButton.addStyleName("sourceButton");

		// Add the nameField and sendButton to the RootPanel
		// Use RootPanel.get() to get the entire body element
		panel.add(nameField, "nameFieldContainer");
		panel.add(sendButton, "sendButtonContainer");
		panel.add(sourcesButton, "sourcesButtonContainer");
		panel.add(errorLabel, "errorLabelContainer");
		panel.add(player, "playerContainer");
	}

	@Override
	public Widget asWidget() {
		return panel;
	}

	@Override
	public HasValue<String> getNameValue() {
		return nameField;
	}

	@Override
	public HasClickHandlers getSendClickHandlers() {
		return sendButton;
	}

	@Override
	public HasClickHandlers getSourcesClickHandlers() {
		return sourcesButton;
	}
	
	@Override
	public void resetAndFocus() {
		// Focus the cursor on the name field when the app loads
		nameField.setFocus(true);
		nameField.selectAll();
	}

	@Override
	public void setError(String errorText) {
		errorLabel.setText(errorText);
	}
	
	public void playURL() {
		player.loadURL(nameField.getValue());
		
	}

	@Override
	public void playSources() {
		
		ArrayList<JWPlayerPlaylistSource> sources = new ArrayList<JWPlayerPlaylistSource>();
		String url = nameField.getValue();
		url = url.replace("http", "rtmp");
		url = url.replace("/playlist.m3u8", "");
		JWPlayerPlaylistSourceImpl srcRtmp = new JWPlayerPlaylistSourceImpl(url);
		sources.add(srcRtmp);
		JWPlayerPlaylistSourceImpl src = new JWPlayerPlaylistSourceImpl(nameField.getValue());
		sources.add(src);
		player.loadSources( sources );
		
	}
}
