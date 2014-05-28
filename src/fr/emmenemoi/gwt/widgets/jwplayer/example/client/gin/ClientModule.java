package fr.emmenemoi.gwt.widgets.jwplayer.example.client.gin;

import com.gwtplatform.mvp.client.gin.AbstractPresenterModule;
import com.gwtplatform.mvp.client.gin.DefaultModule;
import fr.emmenemoi.gwt.widgets.jwplayer.example.client.place.ClientPlaceManager;
import fr.emmenemoi.gwt.widgets.jwplayer.example.client.core.MainPagePresenter;
import fr.emmenemoi.gwt.widgets.jwplayer.example.client.core.MainPageView;
import fr.emmenemoi.gwt.widgets.jwplayer.example.client.place.DefaultPlace;
import fr.emmenemoi.gwt.widgets.jwplayer.example.client.place.NameTokens;

public class ClientModule extends AbstractPresenterModule {

	@Override
	protected void configure() {
		install(new DefaultModule(ClientPlaceManager.class));

		bindPresenter(MainPagePresenter.class, MainPagePresenter.MyView.class,
				MainPageView.class, MainPagePresenter.MyProxy.class);

		bindConstant().annotatedWith(DefaultPlace.class).to(NameTokens.main);

	}
}
