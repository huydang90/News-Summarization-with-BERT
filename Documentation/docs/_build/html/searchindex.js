Search.setIndex({docnames:["cal_rouge","distributed","index","models","modules","others","post_stats","prepro","preprocess","train","train_abstractive","train_extractive","translate"],envversion:{"sphinx.domains.c":1,"sphinx.domains.changeset":1,"sphinx.domains.cpp":1,"sphinx.domains.javascript":1,"sphinx.domains.math":2,"sphinx.domains.python":1,"sphinx.domains.rst":1,"sphinx.domains.std":1,sphinx:55},filenames:["cal_rouge.rst","distributed.rst","index.rst","models.rst","modules.rst","others.rst","post_stats.rst","prepro.rst","preprocess.rst","train.rst","train_abstractive.rst","train_extractive.rst","translate.rst"],objects:{"":{cal_rouge:[0,0,0,"-"],distributed:[1,0,0,"-"],models:[3,0,0,"-"],others:[5,0,0,"-"],post_stats:[6,0,0,"-"],prepro:[7,0,0,"-"],preprocess:[8,0,0,"-"],train:[9,0,0,"-"],train_abstractive:[10,0,0,"-"],train_extractive:[11,0,0,"-"],translate:[12,0,0,"-"]},"models.adam":{Adam:[3,2,1,""]},"models.adam.Adam":{step:[3,3,1,""]},"models.data_loader":{Batch:[3,2,1,""],DataIterator:[3,2,1,""],Dataloader:[3,2,1,""],TextDataloader:[3,2,1,""],abs_batch_size_fn:[3,1,1,""],ext_batch_size_fn:[3,1,1,""],load_dataset:[3,1,1,""]},"models.data_loader.DataIterator":{batch:[3,3,1,""],batch_buffer:[3,3,1,""],create_batches:[3,3,1,""],data:[3,3,1,""],preprocess:[3,3,1,""]},"models.data_loader.TextDataloader":{batch_buffer:[3,3,1,""],create_batches:[3,3,1,""],data:[3,3,1,""],preprocess:[3,3,1,""]},"models.decoder":{TransformerDecoder:[3,2,1,""],TransformerDecoderLayer:[3,2,1,""],TransformerDecoderState:[3,2,1,""]},"models.decoder.TransformerDecoder":{forward:[3,3,1,""],init_decoder_state:[3,3,1,""]},"models.decoder.TransformerDecoderLayer":{forward:[3,3,1,""]},"models.decoder.TransformerDecoderState":{detach:[3,3,1,""],map_batch_fn:[3,3,1,""],repeat_beam_size_times:[3,3,1,""],update_state:[3,3,1,""]},"models.encoder":{Classifier:[3,2,1,""],ExtTransformerEncoder:[3,2,1,""],PositionalEncoding:[3,2,1,""],TransformerEncoderLayer:[3,2,1,""]},"models.encoder.Classifier":{forward:[3,3,1,""]},"models.encoder.ExtTransformerEncoder":{forward:[3,3,1,""]},"models.encoder.PositionalEncoding":{forward:[3,3,1,""],get_emb:[3,3,1,""]},"models.encoder.TransformerEncoderLayer":{forward:[3,3,1,""]},"models.loss":{LabelSmoothingLoss:[3,2,1,""],LossComputeBase:[3,2,1,""],NMTLossCompute:[3,2,1,""],abs_loss:[3,1,1,""],filter_shard_state:[3,1,1,""],shards:[3,1,1,""]},"models.loss.LabelSmoothingLoss":{forward:[3,3,1,""]},"models.loss.LossComputeBase":{monolithic_compute_loss:[3,3,1,""],sharded_compute_loss:[3,3,1,""]},"models.model_builder":{AbsSummarizer:[3,2,1,""],Bert:[3,2,1,""],ExtSummarizer:[3,2,1,""],build_optim:[3,1,1,""],build_optim_bert:[3,1,1,""],build_optim_dec:[3,1,1,""],get_generator:[3,1,1,""]},"models.model_builder.AbsSummarizer":{forward:[3,3,1,""]},"models.model_builder.Bert":{forward:[3,3,1,""]},"models.model_builder.ExtSummarizer":{forward:[3,3,1,""]},"models.neural":{DecoderState:[3,2,1,""],GlobalAttention:[3,2,1,""],MultiHeadedAttention:[3,2,1,""],PositionwiseFeedForward:[3,2,1,""],aeq:[3,1,1,""],gelu:[3,1,1,""],sequence_mask:[3,1,1,""]},"models.neural.DecoderState":{beam_update:[3,3,1,""],detach:[3,3,1,""],map_batch_fn:[3,3,1,""]},"models.neural.GlobalAttention":{forward:[3,3,1,""],score:[3,3,1,""]},"models.neural.MultiHeadedAttention":{forward:[3,3,1,""]},"models.neural.PositionwiseFeedForward":{forward:[3,3,1,""]},"models.optimizers":{MultipleOptimizer:[3,2,1,""],Optimizer:[3,2,1,""],build_optim:[3,1,1,""],use_gpu:[3,1,1,""]},"models.optimizers.MultipleOptimizer":{load_state_dict:[3,3,1,""],state:[3,4,1,""],state_dict:[3,3,1,""],step:[3,3,1,""],zero_grad:[3,3,1,""]},"models.optimizers.Optimizer":{set_parameters:[3,3,1,""],step:[3,3,1,""]},"models.predictor":{Translation:[3,2,1,""],Translator:[3,2,1,""],build_predictor:[3,1,1,""]},"models.predictor.Translation":{log:[3,3,1,""]},"models.predictor.Translator":{from_batch:[3,3,1,""],translate:[3,3,1,""],translate_batch:[3,3,1,""]},"models.reporter":{ReportMgr:[3,2,1,""],ReportMgrBase:[3,2,1,""],Statistics:[3,2,1,""],build_report_manager:[3,1,1,""]},"models.reporter.ReportMgr":{maybe_log_tensorboard:[3,3,1,""]},"models.reporter.ReportMgrBase":{log:[3,3,1,""],report_step:[3,3,1,""],report_training:[3,3,1,""],start:[3,3,1,""]},"models.reporter.Statistics":{accuracy:[3,3,1,""],all_gather_stats:[3,5,1,""],all_gather_stats_list:[3,5,1,""],elapsed_time:[3,3,1,""],log_tensorboard:[3,3,1,""],output:[3,3,1,""],ppl:[3,3,1,""],update:[3,3,1,""],xent:[3,3,1,""]},"models.reporter_ext":{ReportMgr:[3,2,1,""],ReportMgrBase:[3,2,1,""],Statistics:[3,2,1,""],build_report_manager:[3,1,1,""]},"models.reporter_ext.ReportMgr":{maybe_log_tensorboard:[3,3,1,""]},"models.reporter_ext.ReportMgrBase":{log:[3,3,1,""],report_step:[3,3,1,""],report_training:[3,3,1,""],start:[3,3,1,""]},"models.reporter_ext.Statistics":{all_gather_stats:[3,5,1,""],all_gather_stats_list:[3,5,1,""],elapsed_time:[3,3,1,""],log_tensorboard:[3,3,1,""],output:[3,3,1,""],update:[3,3,1,""],xent:[3,3,1,""]},"models.trainer":{Trainer:[3,2,1,""],build_trainer:[3,1,1,""]},"models.trainer.Trainer":{test:[3,3,1,""],train:[3,3,1,""],validate:[3,3,1,""]},"models.trainer_ext":{Trainer:[3,2,1,""],build_trainer:[3,1,1,""]},"models.trainer_ext.Trainer":{test:[3,3,1,""],train:[3,3,1,""],validate:[3,3,1,""]},"others.logging":{init_logger:[5,1,1,""]},"others.pyrouge":{DirectoryProcessor:[5,2,1,""],Rouge155:[5,2,1,""],clean:[5,1,1,""]},"others.pyrouge.DirectoryProcessor":{process:[5,5,1,""]},"others.pyrouge.Rouge155":{bin_path:[5,4,1,""],config_file:[5,4,1,""],convert_and_evaluate:[5,3,1,""],convert_summaries_to_rouge_format:[5,5,1,""],convert_text_to_rouge_format:[5,5,1,""],evaluate:[5,3,1,""],model_filename_pattern:[5,4,1,""],output_to_dict:[5,3,1,""],save_home_dir:[5,3,1,""],settings_file:[5,4,1,""],split_sentences:[5,3,1,""],system_filename_pattern:[5,4,1,""],write_config:[5,3,1,""],write_config_static:[5,5,1,""]},"others.tokenization":{BasicTokenizer:[5,2,1,""],BertTokenizer:[5,2,1,""],WordpieceTokenizer:[5,2,1,""],load_vocab:[5,1,1,""],whitespace_tokenize:[5,1,1,""]},"others.tokenization.BasicTokenizer":{tokenize:[5,3,1,""]},"others.tokenization.BertTokenizer":{convert_ids_to_tokens:[5,3,1,""],convert_tokens_to_ids:[5,3,1,""],from_pretrained:[5,6,1,""],tokenize:[5,3,1,""]},"others.tokenization.WordpieceTokenizer":{tokenize:[5,3,1,""]},"others.utils":{clean:[5,1,1,""],process:[5,1,1,""],rouge_results_to_str:[5,1,1,""],test_rouge:[5,1,1,""],tile:[5,1,1,""]},"prepro.data_builder":{BertData:[7,2,1,""],cal_rouge:[7,1,1,""],format_to_bert:[7,1,1,""],format_to_lines:[7,1,1,""],format_xsum_to_lines:[7,1,1,""],greedy_selection:[7,1,1,""],hashhex:[7,1,1,""],load_json:[7,1,1,""],load_xml:[7,1,1,""],recover_from_corenlp:[7,1,1,""],tokenize:[7,1,1,""]},"prepro.data_builder.BertData":{preprocess:[7,3,1,""]},"train_abstractive.ErrorHandler":{add_child:[10,3,1,""],error_listener:[10,3,1,""],signal_handler:[10,3,1,""]},"train_extractive.ErrorHandler":{add_child:[11,3,1,""],error_listener:[11,3,1,""],signal_handler:[11,3,1,""]},"translate.beam":{Beam:[12,2,1,""],GNMTGlobalScorer:[12,2,1,""]},"translate.beam.Beam":{advance:[12,3,1,""],done:[12,3,1,""],get_current_origin:[12,3,1,""],get_current_state:[12,3,1,""],get_hyp:[12,3,1,""],sort_finished:[12,3,1,""]},"translate.beam.GNMTGlobalScorer":{score:[12,3,1,""]},"translate.penalties":{PenaltyBuilder:[12,2,1,""]},"translate.penalties.PenaltyBuilder":{length_average:[12,3,1,""],length_none:[12,3,1,""],length_penalty:[12,3,1,""],length_wu:[12,3,1,""]},cal_rouge:{chunks:[0,1,1,""],process:[0,1,1,""],rouge_results_to_str:[0,1,1,""],test_rouge:[0,1,1,""]},distributed:{all_gather_list:[1,1,1,""],all_reduce_and_rescale_tensors:[1,1,1,""],is_master:[1,1,1,""],multi_init:[1,1,1,""]},models:{adam:[3,0,0,"-"],data_loader:[3,0,0,"-"],decoder:[3,0,0,"-"],encoder:[3,0,0,"-"],loss:[3,0,0,"-"],model_builder:[3,0,0,"-"],neural:[3,0,0,"-"],optimizers:[3,0,0,"-"],predictor:[3,0,0,"-"],reporter:[3,0,0,"-"],reporter_ext:[3,0,0,"-"],trainer:[3,0,0,"-"],trainer_ext:[3,0,0,"-"]},others:{logging:[5,0,0,"-"],pyrouge:[5,0,0,"-"],tokenization:[5,0,0,"-"],utils:[5,0,0,"-"]},post_stats:{cal_novel:[6,1,1,""],cal_repeat:[6,1,1,""],cal_self_repeat:[6,1,1,""],has_repeat:[6,1,1,""],n_grams:[6,1,1,""],str2bool:[6,1,1,""]},prepro:{data_builder:[7,0,0,"-"],utils:[7,0,0,"-"]},preprocess:{do_format_to_bert:[8,1,1,""],do_format_to_lines:[8,1,1,""],do_format_xsum_to_lines:[8,1,1,""],do_tokenize:[8,1,1,""],str2bool:[8,1,1,""]},train:{str2bool:[9,1,1,""]},train_abstractive:{ErrorHandler:[10,2,1,""],baseline:[10,1,1,""],run:[10,1,1,""],str2bool:[10,1,1,""],test_abs:[10,1,1,""],test_text_abs:[10,1,1,""],train_abs:[10,1,1,""],train_abs_multi:[10,1,1,""],train_abs_single:[10,1,1,""],validate:[10,1,1,""],validate_abs:[10,1,1,""]},train_extractive:{ErrorHandler:[11,2,1,""],run:[11,1,1,""],test_ext:[11,1,1,""],train_ext:[11,1,1,""],train_multi_ext:[11,1,1,""],train_single_ext:[11,1,1,""],validate:[11,1,1,""],validate_ext:[11,1,1,""]},translate:{beam:[12,0,0,"-"],penalties:[12,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","function","Python function"],"2":["py","class","Python class"],"3":["py","method","Python method"],"4":["py","attribute","Python attribute"],"5":["py","staticmethod","Python static method"],"6":["py","classmethod","Python class method"]},objtypes:{"0":"py:module","1":"py:function","2":"py:class","3":"py:method","4":"py:attribute","5":"py:staticmethod","6":"py:classmethod"},terms:{"abstract":10,"boolean":[3,6,8,9,10],"byte":1,"case":[3,5],"class":[3,5,7,10,11,12],"default":3,"final":3,"float":[3,12],"function":[3,5,12],"int":[3,12],"long":3,"new":3,"return":[0,3,5,6,7,8,9,10,12],"static":[3,5],"true":[3,5,6,8,9,10,12],"while":3,But:3,CLS:5,For:5,The:[3,5],Then:3,These:3,Use:5,Uses:3,With:3,_compute_loss:3,_make_shard_st:3,_report_step:3,_report_train:3,a_j:3,abl:5,abs_batch_size_fn:3,abs_loss:3,abssummar:3,abstract_sent_list:7,accross:3,accumul:3,accuraci:3,adadelta:3,adagrad:3,adagrad_accum:3,adam:4,adamoptim:3,add_child:[10,11],added:3,addit:3,advanc:12,aeq:3,aff:5,after:3,afterward:3,against:5,algorithm:[3,5],all:[1,3,5],all_gather_list:1,all_gather_stat:3,all_gather_stats_list:3,all_input:3,all_reduce_and_rescale_tensor:1,along:3,alpha:12,alreadi:5,also:3,although:[3,5],amsgrad:3,ani:5,anoth:3,api_doc:3,appear:5,appli:[3,5],approxim:3,arbitrari:1,aren:5,arg:[0,1,3,5,6,7,8,9,10,11,12],arguabl:3,argument:[3,5],around:3,arxiv:3,assert:3,assum:5,attent:[3,12],attn:3,attn_debug:3,attn_out:12,attn_typ:3,attribut:3,audio:3,automat:5,avail:[3,10,11],averag:[3,12],back:[3,12],backpoint:12,backpropag:3,bahdanau:3,base:[3,5,7,10,11,12],baselin:10,basic:5,basictoken:5,batch:3,batch_buff:3,batch_siz:3,beam:[3,4],beam_siz:3,beam_trac:3,beam_upd:3,becaus:3,been:[3,5],begin:12,bert:[3,8],bert_from_extract:3,bertdata:7,berttoken:5,best:3,beta1:3,beta2:3,beta:[3,12],between:3,beyond:3,bin_path:5,binari:[3,5],block_ngram_repeat:12,bool:[3,12],bos:12,bptt:3,buffer:3,buffer_s:1,build:[3,10],build_optim:3,build_optim_bert:3,build_optim_dec:3,build_predictor:3,build_report_manag:3,build_train:3,builder:[3,5],cach:[3,5],cache_dir:5,cal_lead:[3,10],cal_novel:6,cal_oracl:[3,10],cal_repeat:6,cal_roug:[2,4,7],cal_self_repeat:6,calcul:[0,3],call:3,callabl:3,can:[3,5],cand:[0,5],candid:[0,5],care:[3,12],checkpoint:[3,10,11],children:[10,11],chunk:[0,1,3],cite:[3,12],classifi:3,classmethod:5,clean:5,closur:3,clss:3,code:1,coeffici:3,com:1,combin:[3,5],complet:12,comput:[3,12],config_fil:5,config_file_path:5,configur:5,construct:[3,12],conta:5,contain:[3,5],content:[2,4],context:3,control:3,conveni:5,converg:3,convert:[0,5,6,8,9,10],convert_and_evalu:5,convert_ids_to_token:5,convert_summaries_to_rouge_format:5,convert_text_to_rouge_format:5,convert_tokens_to_id:5,convex:3,copi:3,copy_attn:3,corpus_typ:3,corr:3,correspond:[3,5,6,8,9,10],count:[3,5],cov:12,cov_pen:12,coverag:[3,12],creat:3,create_batch:3,creation:3,cross:3,cuda:[3,12],cur_trunc:3,current:[3,5,12],current_step:3,custom:3,d_ff:3,d_model:3,data:[0,1,3,7,8],data_build:4,data_it:3,data_load:4,data_typ:3,dataiter:3,dataload:3,dataset:3,dblp:3,debug:3,dec_hidden_s:3,decai:3,decay_method:3,decay_step:3,decod:4,decoderst:3,defin:3,denomin:[1,3],describ:3,design:5,detach:3,detail:3,devic:[3,10,11],device_id:[1,3,10,11],dict:3,dictionari:[0,3,5],differ:[3,5],dim:[3,5],dimens:[3,5],dimension:3,dir:5,directori:5,directoryprocessor:5,displai:3,dist:3,distribtut:3,distribut:[2,3,4],diverg:3,divid:3,divis:3,do_format_to_bert:8,do_format_to_lin:8,do_format_xsum_to_lin:8,do_lower_cas:5,do_token:8,doc_sent_list:7,docstr:5,document:[3,5],doe:3,doesn:5,don:3,done:[3,12],dot:3,download:5,dropout:3,dummi:5,dump_beam:3,dure:3,each:3,effect:3,effici:3,elaps:3,elapsed_tim:3,element:[3,6],els:3,emb:3,embed:3,emploi:3,enabl:3,encod:4,encoderbas:3,end:[5,12],entropi:3,eos:12,eps:3,equival:1,error:[10,11],error_listen:[10,11],error_queu:[10,11],errorhandl:[10,11],establish:3,etc:5,eval_onli:3,evalu:5,evaluated_ngram:7,evalud:[10,11],even:0,everi:[3,12],exact:3,exampl:[3,5],except:[10,11],exclusion_token:12,express:5,ext_batch_size_fn:3,extra:3,extract:[10,11],extsummar:3,exttransformerencod:3,fairseq:1,fals:[3,5,6,7,8,9,10,12],fast:3,featur:3,feed:3,ffn:3,field:3,file:[0,3,5],filenam:5,filter_shard_st:3,find:5,finetun:3,first:[3,5],floattensor:3,fname:3,fnn:3,folder:5,form:[3,6,8,9,10],format:[0,5,7,8],format_to_bert:7,format_to_lin:7,format_xsum_to_lin:7,former:3,forward:3,from:[0,1,3,5,12],from_batch:3,from_pretrain:5,full:[5,12],further:5,gather:[1,3],gelu:3,gener:[3,5],get:12,get_current_origin:12,get_current_st:12,get_emb:3,get_gener:3,get_hyp:12,github:1,given:[5,12],global:3,global_scor:[3,12],globalattent:3,globalscor:[3,12],gnmtglobalscor:12,gold:[3,6],gold_ngram_novel:6,gold_scor:3,gold_sent:3,googl:12,gpu:[3,10,11,12],gpu_rank:[1,3],grad:3,grad_accum_count:3,gradient:3,greedi:5,greedy_select:7,ground:3,group:[3,5],h_j:3,h_s:3,h_t:3,handl:[3,5],handler:[10,11],has:[3,5],has_repeat:6,hash:7,hashhex:7,have:[3,5],head:3,head_count:3,heavili:1,here:[3,5],hexim:7,hidden:3,hidden_s:3,home:5,hook:3,how:3,howev:3,html:5,http:[1,3],hypothesi:12,id1:5,id2:5,id3:5,ids:[3,5],idx:3,ignor:3,ignore_index:3,img:3,implement:3,improv:3,includ:3,index:[2,3],indic:[3,12],inherit:3,init:3,init_decoder_st:3,init_logg:5,initi:3,inner:3,input:[0,3,5,7,8],input_dir:5,input_feed:3,inspir:1,instanc:3,instanti:5,instead:3,interfac:3,intern:12,is_mast:1,is_test:[3,7],item:3,iter:[0,3],its:[3,5],journal:3,just:[3,5],kei:3,kera:3,key_len:3,kwarg:[3,5],label:3,label_smooth:3,labelsmoothingloss:3,lambda:3,larg:3,last:[3,12],latter:3,layer:3,layer_cach:3,lazili:3,learn:3,learning_r:3,length:[3,12],length_averag:12,length_non:12,length_pen:12,length_penalti:12,length_wu:12,level:3,like:[3,5],line:[5,7,8],list:[0,1,3,5],listen:[10,11],load:[3,5,10,11],load_dataset:3,load_json:7,load_state_dict:3,load_vocab:5,load_xml:7,log:[3,4],log_fil:5,log_file_level:5,log_tensorboard:3,logger:[3,5],logprob:12,longest:5,longtensor:3,loop:3,loss:4,losscomput:3,losscomputebas:3,lower:[5,7],lr_decai:3,luong:3,machin:12,mai:3,main:[3,9,10,11],make:3,make_shard_st:3,manag:[3,12],mani:3,manipul:3,map:3,map_batch_fn:3,mask:[3,5],mask_cl:3,mask_src:3,mask_tgt:3,match:5,matrix:3,max:3,max_grad_norm:3,max_input_chars_per_word:5,max_len:[3,5],max_length:3,max_siz:[1,3],maximum:3,maybe_log_tensorboard:3,memori:3,memory_bank:3,memory_length:3,memory_mask:3,method:[3,5],min_length:12,minim:3,minimum:12,mlp:3,model:[2,4,5,10,11],model_build:4,model_dim:3,model_dir:5,model_filename_pattern:5,model_s:3,model_sav:3,modelsaverbas:3,modif:3,modul:[2,4],monolithic_compute_loss:3,more:3,mostli:3,multi:3,multi_init:1,multigpu:3,multiheadedattent:3,multipl:[3,5],multipleoptim:3,multipli:3,must:3,mutipl:3,n_batch:3,n_best:[3,12],n_class:3,n_correct:3,n_doc:3,n_gpu:3,n_gram:6,n_src_word:3,n_word:3,name:12,namespac:3,nbest:12,necessari:3,need:[3,5],network:3,neural:[4,12],never_split:5,new_input:3,next:3,nlp:[7,8],nmt:[3,12],nmtlosscomput:3,nmtmodel:3,noam:3,node:[1,3],non:[3,5],none:[3,5,12],norm:3,norm_method:3,normal:3,normalz:3,note:3,noth:3,num_inter_lay:3,num_lay:3,num_process:0,num_step:3,number:3,numer:3,obj:3,object:[3,5,7,10,11,12],old:3,one:[3,5],onli:3,onmt:3,open:0,oper:5,opt:3,optim:4,option:[3,5,12],org:3,origin:3,other:[2,3,4],otherwis:3,ouput:5,our_stat:3,out:3,output:[3,5,12],output_dict:5,output_dir:5,output_to_dict:5,over:[3,12],overrid:3,overridden:3,own:3,packag:[2,4,8],pad:[5,12],pad_id:3,page:2,paper:3,parallel:3,param:[3,5],paramet:[3,12],parameter:3,parent:[10,11],pars:3,part:5,particularli:3,pass:[0,3,5],path:5,pattern:5,pdf:3,peic:5,pen:12,penalti:[3,4],penaltybuild:12,per:[5,10,11],perform:[3,5],perplex:3,pid:[10,11],piec:[1,5],placehold:5,plain:5,pointer:12,posit:3,positionalencod:3,positionwisefeedforward:3,post_stat:[2,4],postpon:3,ppl:3,pre:5,pred_scor:3,pred_sent:3,predefined_graph_1:3,predict:[3,12],predictor:4,prefix:3,prepro:[2,4],preprocess:[2,3,4,7],pretrained_model_name_or_path:5,pretrainedbertmodel:5,previous_input:3,previous_layer_input:3,print:[3,5],prob:[3,12],probabl:[3,12],process:[0,3,5,7,8,10,11,12],produc:3,progress:3,project:3,propag:[3,10,11],propos:3,provid:5,punctuat:5,pyroug:4,python:[3,5],pytorch:1,queri:3,query_len:3,rang:3,rank:12,rate:3,raw:3,recent:3,recip:3,record:5,recover_from_corenlp:7,recurr:3,reduc:1,reevalu:3,ref:[0,5],refer:[0,5],reference_ngram:7,regex:5,regist:3,regular:5,relev:[3,5],reliev:3,repeat:3,repeat_beam_size_tim:3,report:4,report_everi:3,report_manag:3,report_stat:3,report_step:3,report_train:3,reporter_ext:4,reportmgr:3,reportmgrbas:3,repres:3,requir:[3,5],rescal:1,rescale_denom:1,rescor:[3,12],residu:3,respons:3,result:[0,5],results_dict:[0,5],rnn:3,rnndecoderbas:3,roug:[0,5],rouge155:5,rouge_1_f_scor:5,rouge_1_f_score_c:5,rouge_1_f_score_cb:5,rouge_1_precis:5,rouge_arg:5,rouge_dir:5,rouge_home_dir:5,rouge_ouput:5,rouge_output:5,rouge_results_to_str:[0,5],run:[3,5,10,11],same:3,sampl:5,save:[3,5,10,11],save_checkpoint_step:3,save_home_dir:5,saver:3,scale:3,schedul:3,score:[0,3,5,12],script:5,search:[2,3,12],second:3,see:3,seem:5,seg:3,select:3,self:3,self_attn_typ:3,sent:3,sent_label:7,sent_numb:3,sentenc:[3,5],sep:5,separ:5,seper:3,seqlength:3,sequenc:[0,3,5,12],sequence_mask:3,set:[3,10,11],set_paramet:3,sett:5,settings_fil:5,sever:3,sgd:3,sha1:7,shard:3,shard_siz:3,sharded_compute_loss:3,should:[3,5],shouldn:3,shuffl:3,side:3,signal:[10,11],signal_handl:[10,11],signalnum:[10,11],silent:3,similar:3,simplest:3,simplifi:[3,5],simulatan:3,sinc:3,singl:[3,5],size:[0,1,3,12],sl062003:5,slightli:3,smooth:3,softmax:3,someth:3,sort_finish:12,sourc:[3,6],spars:3,spawn:[10,11],specifi:[1,5],spl2003:5,spl:5,split:5,split_sent:5,squar:3,src:[2,3,7],src_len:3,src_pad_mask:3,src_raw:3,stabil:3,stackfram:[10,11],standard:3,stanford:[7,8],start:3,start_decay_step:3,start_tim:3,stat:3,stat_list:3,state:3,state_dict:3,statist:3,stdin:0,stdout:3,step:[3,10,11,12],stepwise_penalti:12,still:3,stochast:3,store:5,str2bool:[6,8,9,10],str:[0,3,6,8,9,10,12],strategi:3,string:[0,3,5,6,7,8,9,10],stringio:0,stuff:3,subclass:3,submodul:4,success:0,suggest:3,sum:[1,3],sum_:3,sume:3,summari:[5,6],summary_ngram_novel:6,summary_s:7,support:[3,5],symbol:3,sys:0,system:[5,12],system_dir:5,system_filename_pattern:5,system_id:5,take:[3,12],tanh:3,target:3,technic:5,temp_dir:[3,5],tensor:[1,3],tensorboard:3,tensorboard_writ:3,tensorflow:3,term:3,test:[3,5,10,11],test_ab:10,test_ext:11,test_it:3,test_roug:[0,5],test_text_ab:10,text:[0,3,5],textdataload:3,tgt:[3,7],tgt_len:3,tgt_pad_mask:3,tgt_sent:3,tgt_vocab:3,tgt_vocab_s:3,thei:[3,5],them:[3,5],thi:[1,3,5],thin:3,those:3,through:[3,5],thu:3,tile:5,time:[3,5],timestep:12,titl:5,todo:3,togeth:3,token:[3,4,6,7,8,12],top_vec:3,torch:3,torchtext:3,total:3,tra:3,trace:3,traceback:[10,11],train:[2,3,4,5,10,11],train_ab:10,train_abs_multi:10,train_abs_singl:10,train_abstract:[2,4],train_ext:11,train_extract:[2,4],train_iter_fct:3,train_loss:3,train_multi_ext:11,train_single_ext:11,train_stat:3,train_step:3,trainer:4,trainer_ext:4,transform:3,transformerdecod:3,transformerdecoderlay:3,transformerdecoderst:3,transformerencoderlay:3,translat:[2,3,4],translate_batch:3,translation_batch:3,trick:3,trunc_siz:3,truncat:3,truth:3,tupl:3,two:3,type:3,u_a:3,unaff:5,understand:5,unit:3,unk:5,unk_token:5,unmodifi:12,unnorm:3,unused0:5,unused1:5,unused2:5,unused3:5,unused4:5,unused5:5,unused6:5,updat:[3,12],update_n_src_word:3,update_st:3,use:[3,5,12],use_bert_basic_token:[5,7],use_final_linear:3,use_gpu:3,used:[3,5],useful:3,user:3,uses:[3,5],using:[3,5],usual:3,util:[1,3,4],v_a:3,valid:[3,10,11],valid_it:3,valid_iter_fct:3,valid_loss:3,valid_stat:3,valid_step:3,validate_ab:10,validate_ext:11,valu:[3,6,8,9,10],variant:3,variou:3,vaswanispujgkp17:3,vector:3,version:5,vocab:[3,5],vocab_fil:5,vocab_s:3,vocabulari:[3,5],w_a:3,walk:12,warmup_step:3,weight:3,weight_decai:3,well:3,what:3,where:3,whether:3,which:[3,5],whitespac:5,whitespace_token:5,window:3,with_cach:3,within:[3,5],word:[3,5,12],word_prob:12,wordlk:12,wordpiec:5,wordpiecetoken:5,workflow:[9,10,11],world_siz:1,wrapper:[3,5],write:[3,5],write_config:5,write_config_file_stat:5,write_config_stat:5,writer:3,wu2016googl:12,www:3,xent:3,xsum:8,yes:[6,8,9,10],yet:3,yield:[0,3],you:3,zero:3,zero_grad:3},titles:["cal_rouge module","distributed module","Welcome to BERTNewsSummary\u2019s documentation!","models package","src","others package","post_stats module","prepro package","preprocess module","train module","train_abstractive module","train_extractive module","translate package"],titleterms:{adam:3,beam:12,bertnewssummari:2,cal_roug:0,content:[3,5,7,12],data_build:7,data_load:3,decod:3,distribut:1,document:2,encod:3,indic:2,log:5,loss:3,model:3,model_build:3,modul:[0,1,3,5,6,7,8,9,10,11,12],neural:3,optim:3,other:5,packag:[3,5,7,12],penalti:12,post_stat:6,predictor:3,prepro:7,preprocess:8,pyroug:5,report:3,reporter_ext:3,src:4,submodul:[3,5,7,12],tabl:2,token:5,train:9,train_abstract:10,train_extract:11,trainer:3,trainer_ext:3,translat:12,util:[5,7],welcom:2}})